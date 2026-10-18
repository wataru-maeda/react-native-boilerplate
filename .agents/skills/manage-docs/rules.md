# Rules

Keep rules in `AGENTS.md`. Keep `CLAUDE.md` as one `@AGENTS.md` line so Claude Code loads them.

## Inspect

- Read the existing `AGENTS.md`, `CLAUDE.md`, and README.
- Read any writing reference supplied by the user. Match its brevity, order, and wording.
- Check links to the target's headings before renaming them. Skills link to `AGENTS.md#git` and its subsections.
- Identify repeated rules, outdated claims, missing commands, and important constraints.

Do not extend a single-file edit to other files without authorization.

## AGENTS.md

- Start with `# <Scope> Rules`. Use short headings for work the reader performs.
- Link to the README.
- Group rules by the actual work: code, screens and styles, state, API calls, dependencies, or tests.
- Preserve ordered procedures. State prerequisites and files that must change together.
- Preserve exact paths, names, commands, exceptions, and safety constraints. Shortening must not change their meaning.

Remove architecture essays, dependency versions, directory trees, and repeated "Key Principles."
Keep brief facts when they prevent a wrong action. Do not force every file into the same sections.

### Commands

- Verify each command against `package.json`.
- Label commands by action. Distinguish checks from commands that rewrite files.
- Explain environment selection once. State required files such as `.env.dev`, simulators, or a running Metro server.

## CLAUDE.md

- Create `CLAUDE.md` beside every `AGENTS.md`.
- Write exactly one line: `@AGENTS.md`.
- Never put rules in `CLAUDE.md`. Move any found there into `AGENTS.md`.
