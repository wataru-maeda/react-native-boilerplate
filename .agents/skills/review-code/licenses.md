# Review Licenses

Follow [repository rules](../../../AGENTS.md).
Review changes only. Do not edit files unless requested.

## Scope

- Use the requested comparison. Otherwise choose the base from repository Git rules.
- Include branch changes, staged edits, unstaged edits, and untracked source files.
- Check changes to `package.json` and `package-lock.json`.
- Review added or updated packages, including dependencies they introduce.
- Include changed assets, license notices, and usage that changes license obligations.

Ask for a base when the branch does not identify one.
Read unchanged files only to understand affected dependencies and their use.
If there are no relevant changes, report that and stop.

## Inspect

Run from the repository root:

```bash
git status --short
git diff --name-status <base>...HEAD
git diff <base>...HEAD
git diff --cached
git diff
git ls-files --others --exclude-standard
```

- Read `AGENTS.md`.
- Verify resolved package versions from lockfiles and their use in the final code.
- Read license files and notices for those exact versions. Use official sources.
- Check separate terms for fonts, images, and icons in `src/assets`.
- Flag missing, unclear, conflicting, or custom licenses for further review.

Do not install packages or execute their scripts merely to inspect licenses.
Do not print secret values or read ignored secret files.

## Commercial Use

- Check whether the license permits the intended commercial use.
- Identify attribution, notice, source-disclosure, and redistribution requirements.
- Distinguish tooling, the web build, and apps distributed through app stores.
- Check whether existing notices and distribution practices meet the identified conditions.
- Ask about intended use when it changes the conclusion.

Do not treat “open source” as proof of unrestricted commercial use.
Do not treat copyleft as a ban on commercial use.
Do not infer a license from a registry label alone.
Mark unresolved terms as needing legal review.

## Report

Lead with restrictions, unmet conditions, and unresolved questions.
For each affected dependency or asset, report:

- Name, resolved version or asset identity, and whether it ships in the app.
- License and source link.
- Commercial-use conditions for the intended use.
- Evidence of compliance or missing obligations.
- Required action or unresolved question.

Group items with the same verified conditions.
State reviewed scope, excluded items, and checks actually run.
State which licenses could not be checked.
Do not claim legal approval or complete safety.

## Follow-up

- Offer fixes after reporting. Apply only requested fixes.
- Verify approved changes to notices or license documentation.
- Use [the security review](./security.md) when a vulnerability review is requested.
- Do not purchase licenses, accept terms, replace packages, or contact vendors without authorization.
- Do not commit, push, or open a PR unless requested.
