# Joymind Matching System Specification

## 1. Scope

This module covers internal sales-to-specialist matching using strict quality-first logic.

Input factors:
- Gender preference
- Client timezone
- Primary/secondary issues
- Client availability
- Optional language and region constraints

Output:
- Ranked specialist matches
- Top recommendations above quality gate
- Hard-filter rejection reasons
- Assignments with override audit

## 2. UX Flow

### Step 1: Setup
Fields:
- Gender preference (required, default `no_preference`)
- Client timezone (required)
- Optional language
- Optional region/licensing

### Step 2: Issues
- Sales note textarea
- `Suggest issues from notes` action
- AI returns primary issue, secondaries, confidence, rationale, review flag
- User must confirm/edit final issue profile manually if needed

### Step 3: Availability
Simple presets:
- Flexible
- Weekdays only
- Weekends only
- Morning only
- Afternoon only
- Evening only

Custom mode:
- Day selection
- Time block selection
- Exact range add/remove

### Step 4: Results
- Summary metrics
- Top matches (score >= quality gate)
- Other qualified candidates
- Rejected candidates with reasons
- Assign action with override requirement for below-gate decisions

## 3. Hard Filters

A specialist is excluded when any condition fails:
1. Active and accepting new clients
2. Gender preference compatible (if specified)
3. Primary issue competency >= 4/5
4. At least 2 viable overlap slots in next 14 days
5. Optional language/region constraints

## 4. Scoring

Applied only to qualified specialists:

`score = 0.45*primary + 0.15*secondary + 0.25*availability + 0.10*timezone + 0.05*caseload`

Component definitions:
- `primary`: primary issue competency / 5
- `secondary`: mean of secondary competency values / 5
- `availability`: overlap volume and day spread in next 14 days
- `timezone`: offset proximity between client and specialist timezones
- `caseload`: higher value for healthier workload

Quality gate:
- Recommendation threshold = 82/100
- Top 3 above threshold shown as primary recommendations

## 5. AI Issue Suggestion Contract

Input:
- `notes: string`

Output:
- `primaryIssue: IssueName`
- `secondaryIssues: IssueName[]` (max 3)
- `confidence: number`
- `rationale: string`
- `needsReview: boolean`

Rules:
- Taxonomy-closed output only
- Exactly one primary issue
- Low-confidence suggestions are flagged for review

## 6. API Endpoints

- `GET /api/meta`
- `POST /api/issues/suggest`
- `POST /api/matching/run`
- `GET /api/matching/run/:runId`
- `POST /api/matching/assign`
- `GET /api/matching/assignments`

## 7. Data and Audit

Matching runs are stored in-memory for traceability during runtime.
Assignment records include:
- runId
- clientId
- specialistId
- slot label
- assignedBy
- assignedAt
- overrideReason (when required)

## 8. Next Integration Path

1. Replace deterministic note classifier with LLM endpoint while preserving output contract.
2. Replace seed specialist list with production DB table reads.
3. Persist runs and assignments to production storage.
4. Add manager dashboard for override monitoring.
