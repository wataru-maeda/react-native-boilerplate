# Create a PR

Open a PR for the current branch that meets PR Rules in [SKILL.md](SKILL.md#pr-rules).

## Inspect

- Select the base from the [branch table](../../../AGENTS.md#branches). Reject `dev`, `stg`, and `main` as source branches. Use [promote.md](promote.md) for those.
- Ask how to handle a dirty working tree. Never include or discard it without authorization.
- Check whether the branch is pushed and whether a PR already exists.

```bash
git status --short
git log --oneline <base>..HEAD
git diff <base>...HEAD
gh pr list --head <branch> --state open
```

## Check

- Run the checks in [AGENTS.md](../../../AGENTS.md#checks). Stop on failures unless a draft PR is requested.
- Run the Maestro flows when screens, navigation, or `testID`s changed. Record which platforms ran.
- Review files that format or lint commands rewrite. Never commit them silently.

## Publish

1. Push the branch if needed.
2. Create the PR from a body file, without waiting for approval. A PR can be edited after it is open.
3. Report the PR URL, the title, and the body. For a hotfix, note the merge back into `stg` and `dev`.

```bash
git push -u origin <branch>
gh pr create --base <base> --head <branch> --title "<title>" --body-file <body-file>
```

Add `--draft` only when requested. Never create a duplicate PR or merge.
