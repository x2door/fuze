import { AvailabilityWindow } from "../types";
import {
  MINUTES_IN_DAY,
  MINUTES_IN_WEEK,
  formatMinutesToClock,
  getDateLabelInTimeZone,
  getTimeZoneOffsetMinutes,
  getWeekdayInTimeZone,
  parseClockToMinutes,
} from "./time";

interface MinuteRange {
  start: number;
  end: number;
}

type DayRangeMap = Record<number, MinuteRange[]>;

const createDayRangeMap = (): DayRangeMap => ({
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
});

const normalizeDay = (day: number): number => ((day % 7) + 7) % 7;

const pushRange = (map: DayRangeMap, dayOfWeek: number, start: number, end: number) => {
  if (end <= start) {
    return;
  }
  map[normalizeDay(dayOfWeek)].push({ start, end });
};

const splitAbsRangeIntoDays = (startAbs: number, endAbs: number): Array<{
  dayOfWeek: number;
  start: number;
  end: number;
}> => {
  const output: Array<{ dayOfWeek: number; start: number; end: number }> = [];

  let cursor = startAbs;
  while (cursor < endAbs) {
    const dayOfWeek = Math.floor(cursor / MINUTES_IN_DAY);
    const dayBoundary = (dayOfWeek + 1) * MINUTES_IN_DAY;
    const sliceEnd = Math.min(endAbs, dayBoundary);

    output.push({
      dayOfWeek,
      start: cursor - dayOfWeek * MINUTES_IN_DAY,
      end: sliceEnd - dayOfWeek * MINUTES_IN_DAY,
    });

    cursor = sliceEnd;
  }

  return output;
};

const windowToMinuteRanges = (windows: AvailabilityWindow[]): DayRangeMap => {
  const map = createDayRangeMap();

  for (const window of windows) {
    const start = parseClockToMinutes(window.start);
    const end = parseClockToMinutes(window.end);

    if (end > start) {
      pushRange(map, window.dayOfWeek, start, end);
      continue;
    }

    pushRange(map, window.dayOfWeek, start, MINUTES_IN_DAY);
    pushRange(map, window.dayOfWeek + 1, 0, end);
  }

  for (const day of Object.keys(map)) {
    map[Number(day)].sort((a, b) => a.start - b.start);
  }

  return map;
};

const shiftWindowsToTimezone = (
  windows: AvailabilityWindow[],
  shiftMinutes: number,
): DayRangeMap => {
  const map = createDayRangeMap();

  for (const window of windows) {
    const startMin = parseClockToMinutes(window.start);
    const endMin = parseClockToMinutes(window.end);
    const duration =
      endMin > startMin
        ? endMin - startMin
        : MINUTES_IN_DAY - startMin + endMin;

    let shiftedStart = window.dayOfWeek * MINUTES_IN_DAY + startMin + shiftMinutes;
    let shiftedEnd = shiftedStart + duration;

    while (shiftedStart < 0) {
      shiftedStart += MINUTES_IN_WEEK;
      shiftedEnd += MINUTES_IN_WEEK;
    }

    while (shiftedStart >= MINUTES_IN_WEEK) {
      shiftedStart -= MINUTES_IN_WEEK;
      shiftedEnd -= MINUTES_IN_WEEK;
    }

    const slices =
      shiftedEnd <= MINUTES_IN_WEEK
        ? splitAbsRangeIntoDays(shiftedStart, shiftedEnd)
        : [
            ...splitAbsRangeIntoDays(shiftedStart, MINUTES_IN_WEEK),
            ...splitAbsRangeIntoDays(0, shiftedEnd - MINUTES_IN_WEEK),
          ];

    for (const slice of slices) {
      pushRange(map, slice.dayOfWeek, slice.start, slice.end);
    }
  }

  for (const day of Object.keys(map)) {
    map[Number(day)].sort((a, b) => a.start - b.start);
  }

  return map;
};

const intersectRanges = (a: MinuteRange[], b: MinuteRange[]): MinuteRange[] => {
  const output: MinuteRange[] = [];

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    const left = a[i];
    const right = b[j];

    const start = Math.max(left.start, right.start);
    const end = Math.min(left.end, right.end);

    if (end > start) {
      output.push({ start, end });
    }

    if (left.end <= right.end) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return output;
};

export interface AvailabilityOverlap {
  slotCount: number;
  uniqueDays: number;
  nextSlots: string[];
  overlapRanges: DayRangeMap;
}

export const computeAvailabilityOverlap = (
  clientWindows: AvailabilityWindow[],
  clientTimezone: string,
  specialistWindows: AvailabilityWindow[],
  specialistTimezone: string,
  sessionDurationMinutes: number,
  lookaheadDays = 14,
): AvailabilityOverlap => {
  const clientMap = windowToMinuteRanges(clientWindows);

  const clientOffset = getTimeZoneOffsetMinutes(clientTimezone);
  const specialistOffset = getTimeZoneOffsetMinutes(specialistTimezone);
  const shiftMinutes = -(specialistOffset - clientOffset);

  const specialistInClientTz = shiftWindowsToTimezone(
    specialistWindows,
    shiftMinutes,
  );

  const overlapRanges = createDayRangeMap();

  for (let day = 0; day < 7; day += 1) {
    overlapRanges[day] = intersectRanges(clientMap[day], specialistInClientTz[day]);
  }

  const slotStep = 30;
  let slotCount = 0;
  const nextSlots: string[] = [];
  const dayLabels = new Set<string>();

  for (let index = 0; index < lookaheadDays; index += 1) {
    const date = new Date(Date.now() + index * 24 * 60 * 60 * 1000);
    const dayOfWeek = getWeekdayInTimeZone(date, clientTimezone);
    const dateLabel = getDateLabelInTimeZone(date, clientTimezone);
    const ranges = overlapRanges[dayOfWeek];

    for (const range of ranges) {
      for (
        let start = range.start;
        start + sessionDurationMinutes <= range.end;
        start += slotStep
      ) {
        slotCount += 1;
        dayLabels.add(dateLabel);

        if (nextSlots.length < 20) {
          nextSlots.push(`${dateLabel} ${formatMinutesToClock(start)}`);
        }
      }
    }
  }

  return {
    slotCount,
    uniqueDays: dayLabels.size,
    nextSlots,
    overlapRanges,
  };
};

export const hasValidWindows = (windows: AvailabilityWindow[]): boolean => {
  if (!windows.length) {
    return false;
  }

  return windows.every((window) => {
    try {
      const start = parseClockToMinutes(window.start);
      const end = parseClockToMinutes(window.end);
      return window.dayOfWeek >= 0 && window.dayOfWeek <= 6 && start !== end;
    } catch {
      return false;
    }
  });
};
