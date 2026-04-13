import { IssueName } from "./config/issues";

export type GenderPreference =
  | "no_preference"
  | "female"
  | "male"
  | "non_binary"
  | "other";

export type SpecialistGender = "female" | "male" | "non_binary" | "other";

export interface AvailabilityWindow {
  dayOfWeek: number;
  start: string;
  end: string;
}

export interface ClientPreferences {
  genderPreference: GenderPreference;
  timezone: string;
  language?: string;
  region?: string;
}

export interface ClientIssueProfile {
  primaryIssue: IssueName;
  secondaryIssues: IssueName[];
  aiConfidence?: number;
  needsReview?: boolean;
}

export interface ClientAvailability {
  mode:
    | "flexible"
    | "weekdays"
    | "weekends"
    | "morning"
    | "afternoon"
    | "evening"
    | "custom";
  windows: AvailabilityWindow[];
}

export interface CaseloadState {
  current: number;
  target: number;
}

export interface Specialist {
  id: string;
  name: string;
  gender: SpecialistGender;
  timezone: string;
  languages: string[];
  regions: string[];
  active: boolean;
  acceptingNewClients: boolean;
  issueSkills: Record<IssueName, number>;
  availability: AvailabilityWindow[];
  caseload: CaseloadState;
}

export interface SuggestedIssues {
  primaryIssue: IssueName;
  secondaryIssues: IssueName[];
  confidence: number;
  rationale: string;
  needsReview: boolean;
}

export interface MatchingRequest {
  clientId: string;
  sessionDurationMinutes: number;
  preferences: ClientPreferences;
  issueProfile: ClientIssueProfile;
  availability: ClientAvailability;
}

export interface MatchingScoreBreakdown {
  primaryIssueFit: number;
  secondaryIssueFit: number;
  availabilityFit: number;
  timezoneFit: number;
  caseloadFit: number;
}

export interface MatchCandidate {
  specialistId: string;
  specialistName: string;
  specialistTimezone: string;
  score: number;
  breakdown: MatchingScoreBreakdown;
  reasonBadges: string[];
  nextSlots: string[];
}

export interface RejectedCandidate {
  specialistId: string;
  specialistName: string;
  reasons: string[];
}

export interface MatchingRunResult {
  runId: string;
  qualityGateScore: number;
  recommendations: MatchCandidate[];
  otherQualified: MatchCandidate[];
  rejected: RejectedCandidate[];
  summary: {
    evaluated: number;
    qualified: number;
    aboveQualityGate: number;
  };
}

export interface AssignmentRecord {
  assignmentId: string;
  runId?: string;
  clientId: string;
  specialistId: string;
  slotLabel: string;
  overrideReason?: string;
  assignedBy: string;
  assignedAt: string;
}
