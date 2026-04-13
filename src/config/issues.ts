export const ISSUE_TAXONOMY = [
  "Anxiety & stress",
  "Bad habits",
  "Fears & phobias",
  "Health & wellness",
  "Minor related issues",
  "Other addictions",
  "Personal development",
  "Relationships issues",
  "Sexual & intimacy issues",
  "Smoking & vaping",
  "Trauma",
  "Weight loss",
] as const;

export type IssueName = (typeof ISSUE_TAXONOMY)[number];
