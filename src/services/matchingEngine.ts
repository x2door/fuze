import { specialists } from "../data/specialists";
import {
  AvailabilityWindow,
  ClientAvailability,
  MatchCandidate,
  MatchingRequest,
  MatchingRunResult,
  RejectedCandidate,
  Specialist,
} from "../types";
import {
  computeAvailabilityOverlap,
  hasValidWindows,
} from "../utils/availability";
import { getTimeZoneOffsetMinutes } from "../utils/time";

const QUALITY_GATE_SCORE = 82;
const MIN_VIABLE_SLOTS = 2;
const MIN_PRIMARY_COMPETENCY = 4;

const buildPresetWindows = (
  mode: ClientAvailability["mode"],
): AvailabilityWindow[] => {
  const allDays = [0, 1, 2, 3, 4, 5, 6];
  const weekdays = [1, 2, 3, 4, 5];
  const weekends = [0, 6];

  const mapDays = (days: number[], start: string, end: string): AvailabilityWindow[] =>
    days.map((dayOfWeek) => ({ dayOfWeek, start, end }));

  switch (mode) {
    case "flexible":
      return mapDays(allDays, "00:00", "23:59");
    case "weekdays":
      return mapDays(weekdays, "00:00", "23:59");
    case "weekends":
      return mapDays(weekends, "00:00", "23:59");
    case "morning":
      return mapDays(allDays, "06:00", "11:59");
    case "afternoon":
      return mapDays(allDays, "12:00", "17:59");
    case "evening":
      return mapDays(allDays, "18:00", "22:00");
    case "custom":
      return [];
    default:
      return [];
  }
};

const resolveAvailabilityWindows = (
  availability: ClientAvailability,
): AvailabilityWindow[] => {
  if (availability.mode === "custom") {
    return availability.windows;
  }

  if (availability.windows.length > 0) {
    return availability.windows;
  }

  return buildPresetWindows(availability.mode);
};

const isGenderMatch = (
  preference: MatchingRequest["preferences"]["genderPreference"],
  specialistGender: Specialist["gender"],
): boolean => {
  if (preference === "no_preference") {
    return true;
  }

  if (preference === "non_binary") {
    return specialistGender === "non_binary";
  }

  return specialistGender === preference;
};

const computeSecondaryFit = (
  specialist: Specialist,
  secondaryIssues: MatchingRequest["issueProfile"]["secondaryIssues"],
): number => {
  if (!secondaryIssues.length) {
    return 1;
  }

  const total = secondaryIssues.reduce((sum, issue) => {
    return sum + (specialist.issueSkills[issue] || 0) / 5;
  }, 0);

  return total / secondaryIssues.length;
};

const computeTimezoneFit = (clientTimezone: string, specialistTimezone: string): number => {
  const offsetDelta = Math.abs(
    getTimeZoneOffsetMinutes(clientTimezone) -
      getTimeZoneOffsetMinutes(specialistTimezone),
  );

  const hours = offsetDelta / 60;

  if (hours <= 2) {
    return 1;
  }
  if (hours <= 5) {
    return 0.8;
  }
  if (hours <= 8) {
    return 0.6;
  }
  return 0.4;
};

const computeCaseloadFit = (specialist: Specialist): number => {
  const { current, target } = specialist.caseload;

  if (target <= 0) {
    return 0.5;
  }

  if (current <= target) {
    return Math.max(0.8, 1 - (current / target) * 0.2);
  }

  const overload = (current - target) / target;
  return Math.max(0, 0.8 - overload * 0.8);
};

const computeAvailabilityFit = (
  slotCount: number,
  uniqueDays: number,
  lookaheadDays = 14,
): number => {
  const slotComponent = Math.min(1, slotCount / 16);
  const dayCoverage = uniqueDays / Math.min(lookaheadDays, 7);
  const dayComponent = Math.min(1, dayCoverage);

  return slotComponent * 0.75 + dayComponent * 0.25;
};

const buildReasonBadges = (
  primaryFit: number,
  secondaryFit: number,
  availabilityFit: number,
  timezoneFit: number,
  genderMatched: boolean,
): string[] => {
  const badges: string[] = [];

  badges.push(
    primaryFit >= 0.9 ? "Primary issue fit: strong" : "Primary issue fit: good",
  );

  if (secondaryFit >= 0.8) {
    badges.push("Secondary issue fit: strong");
  } else if (secondaryFit >= 0.6) {
    badges.push("Secondary issue fit: fair");
  }

  if (availabilityFit >= 0.8) {
    badges.push("Availability overlap: high");
  } else if (availabilityFit >= 0.6) {
    badges.push("Availability overlap: medium");
  } else {
    badges.push("Availability overlap: limited");
  }

  badges.push(
    timezoneFit >= 0.8 ? "Timezone fit: convenient" : "Timezone fit: moderate",
  );

  badges.push(genderMatched ? "Gender preference matched" : "No gender preference");

  return badges;
};

const byScore = (a: MatchCandidate, b: MatchCandidate): number => {
  if (b.score !== a.score) {
    return b.score - a.score;
  }

  if (b.breakdown.primaryIssueFit !== a.breakdown.primaryIssueFit) {
    return b.breakdown.primaryIssueFit - a.breakdown.primaryIssueFit;
  }

  if (b.breakdown.availabilityFit !== a.breakdown.availabilityFit) {
    return b.breakdown.availabilityFit - a.breakdown.availabilityFit;
  }

  return b.breakdown.caseloadFit - a.breakdown.caseloadFit;
};

export const runMatching = (request: MatchingRequest): MatchingRunResult => {
  const windows = resolveAvailabilityWindows(request.availability);

  if (!hasValidWindows(windows)) {
    throw new Error("Availability windows are required and must be valid.");
  }

  const qualified: MatchCandidate[] = [];
  const rejected: RejectedCandidate[] = [];

  for (const specialist of specialists) {
    const reasons: string[] = [];

    if (!specialist.active || !specialist.acceptingNewClients) {
      reasons.push("Specialist is not actively accepting new clients.");
    }

    const genderMatched = isGenderMatch(
      request.preferences.genderPreference,
      specialist.gender,
    );

    if (!genderMatched) {
      reasons.push("Gender preference mismatch.");
    }

    if (
      request.preferences.language &&
      !specialist.languages.includes(request.preferences.language)
    ) {
      reasons.push("Requested language not supported by specialist.");
    }

    if (request.preferences.region && !specialist.regions.includes(request.preferences.region)) {
      reasons.push("Requested region/licensing constraint not met.");
    }

    const primaryCompetency = specialist.issueSkills[request.issueProfile.primaryIssue] || 0;
    if (primaryCompetency < MIN_PRIMARY_COMPETENCY) {
      reasons.push(
        `Primary issue competency below threshold (${primaryCompetency}/5).`,
      );
    }

    const overlap = computeAvailabilityOverlap(
      windows,
      request.preferences.timezone,
      specialist.availability,
      specialist.timezone,
      request.sessionDurationMinutes,
      14,
    );

    if (overlap.slotCount < MIN_VIABLE_SLOTS) {
      reasons.push("Insufficient availability overlap in the next 14 days.");
    }

    if (reasons.length > 0) {
      rejected.push({
        specialistId: specialist.id,
        specialistName: specialist.name,
        reasons,
      });
      continue;
    }

    const primaryFit = primaryCompetency / 5;
    const secondaryFit = computeSecondaryFit(
      specialist,
      request.issueProfile.secondaryIssues,
    );
    const availabilityFit = computeAvailabilityFit(
      overlap.slotCount,
      overlap.uniqueDays,
    );
    const timezoneFit = computeTimezoneFit(
      request.preferences.timezone,
      specialist.timezone,
    );
    const caseloadFit = computeCaseloadFit(specialist);

    const weightedScore =
      primaryFit * 0.45 +
      secondaryFit * 0.15 +
      availabilityFit * 0.25 +
      timezoneFit * 0.1 +
      caseloadFit * 0.05;

    qualified.push({
      specialistId: specialist.id,
      specialistName: specialist.name,
      specialistTimezone: specialist.timezone,
      score: Math.round(weightedScore * 100),
      breakdown: {
        primaryIssueFit: Number(primaryFit.toFixed(2)),
        secondaryIssueFit: Number(secondaryFit.toFixed(2)),
        availabilityFit: Number(availabilityFit.toFixed(2)),
        timezoneFit: Number(timezoneFit.toFixed(2)),
        caseloadFit: Number(caseloadFit.toFixed(2)),
      },
      reasonBadges: buildReasonBadges(
        primaryFit,
        secondaryFit,
        availabilityFit,
        timezoneFit,
        genderMatched,
      ),
      nextSlots: overlap.nextSlots.slice(0, 3),
    });
  }

  qualified.sort(byScore);

  const recommendations = qualified
    .filter((candidate) => candidate.score >= QUALITY_GATE_SCORE)
    .slice(0, 3);

  const recommendationIds = new Set(recommendations.map((item) => item.specialistId));
  const otherQualified = qualified.filter(
    (candidate) => !recommendationIds.has(candidate.specialistId),
  );

  return {
    runId: `run-${Date.now()}`,
    qualityGateScore: QUALITY_GATE_SCORE,
    recommendations,
    otherQualified,
    rejected,
    summary: {
      evaluated: specialists.length,
      qualified: qualified.length,
      aboveQualityGate: qualified.filter((candidate) => candidate.score >= QUALITY_GATE_SCORE)
        .length,
    },
  };
};
