# Review Security

Follow [repository rules](../../../AGENTS.md).
Review changes only. Do not edit files unless requested.

## Scope

- Use the requested comparison. Otherwise choose the base from repository Git rules.
- Include branch changes, staged edits, unstaged edits, and untracked source files.
- Review affected source, configuration, and CI workflows.
- Read unchanged callers and dependencies only to understand changed behavior.
- Report newly introduced risks or existing risks made worse by the changes.

Ask for a base when the branch does not identify one.
If nothing changed, report that and stop.

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

Read the final file contents before reporting a finding.
Track renames and deletions. Do not count the same issue twice.

- Read `AGENTS.md`.
- Follow changed inputs through validation, permission checks, and data access.
- Include changed dependencies, lockfiles, build scripts, and deployment settings.
- Check relevant generated changes without auditing unchanged generated output.
- Do not print secret values or read ignored secret files merely to scan them.

## Security Checks

- App code: Check exposed credentials, local storage of sensitive data, unsafe WebView or HTML rendering, deep links, redirects, and external links.
- Configuration: Check values in `app.config.ts`, `app.json`, and `eas.json`. Values in `extra` ship inside the app bundle and are public.
- Environment: Check that secrets stay out of `.env.*.example` and out of `EXPO_PUBLIC_` variables.
- CI: Check workflow permissions, secret use, and third-party actions in `.github/workflows`.
- Other changes: Check dependency risks, command execution, and sensitive data in files or logs.

Client headers and client-side checks do not prove user identity.
A repository rule violation is not automatically an exploitable vulnerability.

## Dependencies

- Check changes to `package.json` and `package-lock.json`.
- Review added or updated packages, including dependencies they introduce.
- Verify security advisories against the resolved versions.
- Report package, resolved version, whether it ships in the app or only in tooling, advisory evidence, and required action.
- State which dependencies could not be checked.

Use [the license review](./licenses.md) when a license review is requested.

## Evidence

- Explain the changed behavior, attack conditions, and impact.
- Cite the changed file and line. Include relevant supporting code.
- Separate demonstrated risks from concerns that need verification.
- Cite local rules when applicable. Report real security risks even if no local rule covers them.
- Verify dependency advisories against the exact changed version using authoritative sources.

Do not claim a vulnerability from a package name or scanner result alone.
Do not run live attacks, migrations, deployments, or commands that expose secrets.
Use safe local checks when they help confirm a finding.

## Report

Lead with findings ordered by severity.

For each finding, include:

- Severity and short title.
- File and line.
- Attack conditions and impact.
- Evidence and any uncertainty.
- Smallest recommended fix.

Group findings if there are more than five.
State reviewed scope, excluded files, and checks actually run.
If no findings are confirmed, say so without declaring the code secure.

## Follow-up

- Offer fixes after reporting.
- Apply only requested fixes.
- Verify approved fixes with relevant checks.
- Do not commit, push, or open a PR unless requested.
