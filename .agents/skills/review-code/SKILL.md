---
name: review-code
description: Review a branch diff against repository rules, with required security and license reviews. Report cited violations and offer scoped fixes when the user requests a code review.
---

# Review Code

Review the branch diff against [repository rules](../../../AGENTS.md).
A review request does not authorize edits.

## Inspect

- Use `main` as the base unless the user names another ([Branches](../../../AGENTS.md#branches)).
- Read `git diff --name-only <base>...HEAD` and `git diff <base>...HEAD`.
- Read `AGENTS.md`, including [Git rules](../../../AGENTS.md#git).
- Exclude `package-lock.json`, `node_modules/`, `ios/`, `android/`, `dist/`, and `coverage/` from this rules review. Report excluded scope.

## Review

- Check required utilities, file placement, names, imports, and types.
- Check `testID`s and Maestro flows for new screens, and tests beside new components.
- Check branch names and commit messages against Git rules.
- Report only issues introduced by the diff. Do not flag unrelated existing code.
- Cite a rule for each violation. Label uncertainty as advisory. Label any personal suggestion as outside the rules.

## Required Reviews

1. Read and run [the security review](./security.md).
2. Read and run [the license review](./licenses.md).
3. Use the same base and head as this review for both. Exclude unrelated uncommitted work.
4. Include both review results in the report. Record findings, limitations, and any dependencies or assets that could not be checked. If license review finds no relevant changes, state that explicitly.
5. Recheck affected findings if the diff changes after review. Do not reuse results from an older diff.

Complete both reviews before reporting.
Do not treat a missing or incomplete review as a pass.

## Report

Lead with the important findings.
For each finding, give the file and line, rule heading, observed behavior,
required behavior, and suggested fix.

- Separate violations from advisories.
- State the number of files reviewed and findings.
- Say explicitly when no violations were found.
- Include at most two useful examples of compliance.
- Do not claim unrun checks passed.

## Fix

1. Offer to fix violations one at a time. Do not auto-apply advisories.
2. For “yes,” make the smallest approved edit. For “no,” leave it.
3. For “skip rest,” stop offering fixes.
4. Run relevant checks for non-trivial edits. Check that the chosen fix works without restarting the full review.
5. Report fixed and skipped violations, remaining advisories, and the next action.

Respect an explicit request to fix a defined set without repeating approval.
Do not commit, push, or open a PR unless requested.
