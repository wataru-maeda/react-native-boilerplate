---
name: manage-docs
description: Create or update README files, AGENTS.md rules, and skills from actual code. Use before editing any README.md, AGENTS.md, or skill, or when condensing them.
---

# Manage Docs

Write docs a developer or agent can follow without guessing.

## Actions

| Target                      | Read                   |
| --------------------------- | ---------------------- |
| `README.md`                 | [readme.md](readme.md) |
| `AGENTS.md` and `CLAUDE.md` | [rules.md](rules.md)   |
| Skills in `.agents/skills`  | [skills.md](skills.md) |

## Process

1. Read the target, its parent rules, and the code behind each claim. Never print secret values.
2. Show the proposed text before writing unless edits are authorized.
3. Ask one open question at a time: background, recommendation, then options. Ask in plain text.
4. Write the approved version. Do not ask again after approval.

Do not run deployment, secret upload, or build commands merely to document them.
Do not commit or push unless requested.

## Writing

- Write direct orders. Give each sentence one instruction. Put important rules first.
- Keep lists to five items. Split longer lists by purpose. Number steps when order matters.
- Copy commands, paths, and names from the code. State each command's working directory.
- Link to the owner of a rule or procedure. Never copy it.
- Remove filler, repeated summaries, and unverified claims.

## Verify

- Check links, heading anchors, commands, and paths against the repository.
- Run the formatter check on edited files.
- Check the diff for unrelated edits, lost constraints, and exposed secrets.
- Report only checks actually run.
