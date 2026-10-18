# Promote

Move tested changes from `dev` to `stg`, and from `stg` to `main`. Follow [Merge and Version](../../../AGENTS.md#merge-and-version).

## Inspect

- Fetch the remote. Show what each promotion carries.
- Check that `package.json` on `dev` has the version for the next release before promoting to `main`. Request a version-bump PR into `dev` when it does not.
- Check required checks on the source branch.

```bash
git fetch origin
git log --oneline origin/stg..origin/dev
git log --oneline origin/main..origin/stg
node -p "require('./package.json').version"
```

## Open

1. Open the PR. Use a body file listing the included PRs.
2. Report the PR URL and the included PRs.

```bash
gh pr create --base stg --head dev --title "chore: promote dev to stg" --body-file <body-file>
gh pr create --base main --head stg --title "chore: release v<version>" --body-file <body-file>
```

## Merge

- Merge only when asked, with `gh pr merge <N> --merge`. Never squash a promotion.
- After `stg` reaches `main`, publish the release with [release.md](release.md).
- After a hotfix reaches `main`, open merge-back PRs from `main` to `stg` and to `dev`.
