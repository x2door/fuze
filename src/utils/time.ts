const WEEKDAY_MAP: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export const MINUTES_IN_DAY = 24 * 60;
export const MINUTES_IN_WEEK = 7 * MINUTES_IN_DAY;

export const parseClockToMinutes = (value: string): number => {
  const match = /^(\d{2}):(\d{2})$/.exec(value);
  if (!match) {
    throw new Error(`Invalid time value: ${value}`);
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    throw new Error(`Invalid time value: ${value}`);
  }

  return hours * 60 + minutes;
};

export const formatMinutesToClock = (minutes: number): string => {
  const total = ((minutes % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY;
  const hours = Math.floor(total / 60);
  const mins = total % 60;
  return `${hours.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}`;
};

export const normalizeWeekMinute = (minutes: number): number =>
  ((minutes % MINUTES_IN_WEEK) + MINUTES_IN_WEEK) % MINUTES_IN_WEEK;

export const getTimeZoneOffsetMinutes = (
  timeZone: string,
  date = new Date(),
): number => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const parts = formatter.formatToParts(date);
  const lookup = Object.fromEntries(
    parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]),
  );

  const asUtc = Date.UTC(
    Number(lookup.year),
    Number(lookup.month) - 1,
    Number(lookup.day),
    Number(lookup.hour),
    Number(lookup.minute),
    Number(lookup.second),
  );

  return (asUtc - date.getTime()) / 60000;
};

export const getWeekdayInTimeZone = (date: Date, timeZone: string): number => {
  const label = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
  }).format(date);

  const index = WEEKDAY_MAP[label];
  if (index === undefined) {
    throw new Error(`Unable to resolve weekday for '${label}' in timezone '${timeZone}'.`);
  }
  return index;
};

export const getDateLabelInTimeZone = (date: Date, timeZone: string): string => {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date);
};
