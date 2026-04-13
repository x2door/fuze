import { ISSUE_TAXONOMY, IssueName } from "../config/issues";
import { Specialist } from "../types";

const baseSkills = ISSUE_TAXONOMY.reduce((acc, issue) => {
  acc[issue] = 2;
  return acc;
}, {} as Record<IssueName, number>);

const makeSkills = (
  overrides: Partial<Record<IssueName, number>>,
): Record<IssueName, number> => ({
  ...baseSkills,
  ...overrides,
});

const weekdays = [1, 2, 3, 4, 5];

const weekdayWindow = (start: string, end: string) =>
  weekdays.map((dayOfWeek) => ({ dayOfWeek, start, end }));

export const specialists: Specialist[] = [
  {
    id: "sp-001",
    name: "Iris Sutalo",
    gender: "female",
    timezone: "America/New_York",
    languages: ["en", "es"],
    regions: ["US"],
    active: true,
    acceptingNewClients: true,
    issueSkills: makeSkills({
      "Anxiety & stress": 5,
      "Fears & phobias": 5,
      "Trauma": 4,
      "Personal development": 4,
      "Health & wellness": 4,
    }),
    availability: [...weekdayWindow("08:00", "15:00")],
    caseload: { current: 17, target: 22 },
  },
  {
    id: "sp-002",
    name: "Natalia Ter",
    gender: "female",
    timezone: "America/Los_Angeles",
    languages: ["en"],
    regions: ["US", "CA"],
    active: true,
    acceptingNewClients: true,
    issueSkills: makeSkills({
      "Relationships issues": 5,
      "Sexual & intimacy issues": 5,
      "Anxiety & stress": 4,
      "Trauma": 4,
      "Personal development": 4,
    }),
    availability: [...weekdayWindow("10:00", "18:30")],
    caseload: { current: 20, target: 21 },
  },
  {
    id: "sp-003",
    name: "Anthony Contreras",
    gender: "male",
    timezone: "America/Chicago",
    languages: ["en", "es"],
    regions: ["US"],
    active: true,
    acceptingNewClients: true,
    issueSkills: makeSkills({
      "Smoking & vaping": 5,
      "Other addictions": 5,
      "Bad habits": 4,
      "Weight loss": 4,
      "Health & wellness": 4,
    }),
    availability: [
      ...weekdayWindow("09:00", "17:00"),
      { dayOfWeek: 6, start: "09:00", end: "13:00" },
    ],
    caseload: { current: 12, target: 18 },
  },
  {
    id: "sp-004",
    name: "Dustin Fisher",
    gender: "male",
    timezone: "America/New_York",
    languages: ["en"],
    regions: ["US"],
    active: true,
    acceptingNewClients: true,
    issueSkills: makeSkills({
      "Anxiety & stress": 4,
      "Personal development": 5,
      "Bad habits": 4,
      "Health & wellness": 4,
      "Weight loss": 4,
    }),
    availability: [...weekdayWindow("07:00", "12:30")],
    caseload: { current: 14, target: 20 },
  },
  {
    id: "sp-005",
    name: "Dana C",
    gender: "non_binary",
    timezone: "America/Denver",
    languages: ["en"],
    regions: ["US"],
    active: true,
    acceptingNewClients: true,
    issueSkills: makeSkills({
      "Trauma": 5,
      "Anxiety & stress": 5,
      "Fears & phobias": 4,
      "Relationships issues": 4,
      "Minor related issues": 4,
    }),
    availability: [
      ...weekdayWindow("12:00", "20:00"),
      { dayOfWeek: 0, start: "10:00", end: "15:00" },
    ],
    caseload: { current: 16, target: 16 },
  },
  {
    id: "sp-006",
    name: "Rochelle Cook",
    gender: "female",
    timezone: "America/Phoenix",
    languages: ["en"],
    regions: ["US"],
    active: true,
    acceptingNewClients: true,
    issueSkills: makeSkills({
      "Health & wellness": 5,
      "Weight loss": 5,
      "Bad habits": 4,
      "Smoking & vaping": 4,
      "Personal development": 4,
    }),
    availability: [
      ...weekdayWindow("06:00", "14:00"),
      { dayOfWeek: 6, start: "08:00", end: "12:00" },
    ],
    caseload: { current: 10, target: 18 },
  },
  {
    id: "sp-007",
    name: "Michael Glock",
    gender: "male",
    timezone: "Europe/London",
    languages: ["en", "de"],
    regions: ["US", "UK"],
    active: true,
    acceptingNewClients: true,
    issueSkills: makeSkills({
      "Fears & phobias": 5,
      "Anxiety & stress": 4,
      "Personal development": 4,
      "Minor related issues": 5,
      "Trauma": 4,
    }),
    availability: [...weekdayWindow("13:00", "20:00")],
    caseload: { current: 19, target: 20 },
  },
  {
    id: "sp-008",
    name: "Kristen Luman",
    gender: "female",
    timezone: "America/New_York",
    languages: ["en", "fr"],
    regions: ["US", "CA"],
    active: true,
    acceptingNewClients: false,
    issueSkills: makeSkills({
      "Sexual & intimacy issues": 5,
      "Relationships issues": 5,
      "Anxiety & stress": 4,
      "Trauma": 4,
      "Personal development": 4,
    }),
    availability: [...weekdayWindow("11:00", "19:00")],
    caseload: { current: 23, target: 20 },
  },
];
