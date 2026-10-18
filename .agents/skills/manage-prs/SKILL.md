---
name: manage-prs
description: Create, review, and merge GitHub pull requests and publish releases using repository Git rules. Use for requests to open a PR, push and create a PR, review PRs, merge a PR, or tag a release and write release notes.
---

# Manage PRs

Follow [Git rules](../../../AGENTS.md#git). Work branches target `dev`. Promotion PRs go from `dev` to `stg` and from `stg` to `main`.

## Actions

| Request                          | Read                     |
| -------------------------------- | ------------------------ |
| Open a PR for the current branch | [create.md](create.md)   |
| Review one or more PRs           | [review.md](review.md)   |
| Promote `dev` → `stg` → `main`   | [promote.md](promote.md) |
| Tag and publish a release        | [release.md](release.md) |

## PR Rules

### Title

- Write `type(scope): description`, at most 70 characters. Use the types and scopes in [Commits](../../../AGENTS.md#commits).
- Squash merges use the title as the commit message.
- Title promotion PRs `chore: promote dev to stg` or `chore: release v<version>` for `stg` to `main`.

### Body

- Fill `.github/pull_request_template.md` from the actual diff and commits. Never reuse old text.
- Link related issues in Overview with `Closes #N`.
- Tick only checks that ran. Record failures and skipped checks in Notes.
- Fill Test Cases with actual results, including Maestro flows and the platforms they ran on. Remove the table when there are none.
- Remove empty sections and placeholders. Leave screenshots to the user when UI changed.

### Merge

- Merge only when asked and after required checks pass.
- Squash merge work branches into `dev`. Use merge commits for promotion and hotfix merge-back PRs ([Merge and Version](../../../AGENTS.md#merge-and-version)).
- Never pass `--subject`. GitHub titles the commit `<PR title> (#<N>)`, which links it back to the PR.
- Keep work branches. Delete them only when cleanup is requested. Never delete `dev`, `stg`, or `main`.

```bash
gh pr checks <N> --watch
gh pr merge <N> --squash                   # work branches into dev
gh pr merge <N> --merge                    # dev → stg, stg → main, hotfix merge-back
```
