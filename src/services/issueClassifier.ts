import { ISSUE_TAXONOMY, IssueName } from "../config/issues";
import { SuggestedIssues } from "../types";

const ISSUE_KEYWORDS: Record<IssueName, string[]> = {
  "Anxiety & stress": [
    "anxiety",
    "stress",
    "overwhelm",
    "panic",
    "burnout",
    "nervous",
    "worry",
    "restless",
  ],
  "Bad habits": ["habit", "procrastination", "routine", "discipline", "late", "delay"],
  "Fears & phobias": ["fear", "phobia", "avoid", "flying", "public speaking", "heights"],
  "Health & wellness": ["sleep", "wellness", "energy", "exercise", "nutrition", "health"],
  "Minor related issues": [
    "focus",
    "motivation",
    "confidence",
    "mindset",
    "clarity",
    "adjustment",
  ],
  "Other addictions": [
    "addiction",
    "alcohol",
    "drug",
    "gambling",
    "substance",
    "compulsive",
  ],
  "Personal development": [
    "growth",
    "goal",
    "performance",
    "leadership",
    "purpose",
    "self improvement",
  ],
  "Relationships issues": [
    "relationship",
    "partner",
    "marriage",
    "conflict",
    "communication",
    "breakup",
  ],
  "Sexual & intimacy issues": [
    "intimacy",
    "sexual",
    "desire",
    "connection",
    "libido",
    "bedroom",
  ],
  "Smoking & vaping": ["smoking", "vaping", "nicotine", "cigarette", "tobacco"],
  Trauma: ["trauma", "ptsd", "abuse", "trigger", "flashback", "incident"],
  "Weight loss": ["weight", "lose weight", "weight loss", "overeating", "diet", "cravings"],
};

const normalizeText = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const countKeywordHits = (text: string, keyword: string): number => {
  if (!keyword.length) {
    return 0;
  }

  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b${escaped}\\b`, "g");
  return (text.match(regex) || []).length;
};

export const suggestIssuesFromNotes = (notes: string): SuggestedIssues => {
  const normalized = normalizeText(notes);

  const scores = ISSUE_TAXONOMY.map((issue) => {
    const score = ISSUE_KEYWORDS[issue].reduce(
      (total, keyword) => total + countKeywordHits(normalized, keyword),
      0,
    );

    return { issue, score };
  }).sort((a, b) => b.score - a.score);

  const [top, ...rest] = scores;

  if (!top || top.score === 0) {
    return {
      primaryIssue: "Minor related issues",
      secondaryIssues: ["Personal development"],
      confidence: 0.46,
      rationale:
        "Notes do not strongly map to one category, so a broad category was selected for manual review.",
      needsReview: true,
    };
  }

  const secondaries = rest
    .filter((item) => item.score > 0)
    .slice(0, 3)
    .map((item) => item.issue);

  const primaryStrength = Math.min(top.score, 5);
  const confidenceRaw = 0.55 + primaryStrength * 0.07 + secondaries.length * 0.04;
  const confidence = Number(Math.min(0.95, confidenceRaw).toFixed(2));
  const needsReview = confidence < 0.75 || top.score < 2;

  return {
    primaryIssue: top.issue,
    secondaryIssues: secondaries,
    confidence,
    rationale: `Primary signals in the notes align most with ${top.issue}.`,
    needsReview,
  };
};
