# Review PRs

Review each PR's code with [review-code](../review-code/SKILL.md), then check the PR against PR Rules in [SKILL.md](SKILL.md#pr-rules).
A review request does not authorize edits, comments, approvals, or merges.

## Select

- Review the PR numbers given. With none, list open PRs and ask which to review.
- Fetch each PR without switching the current branch.

```bash
gh pr view <N> --json number,title,body,baseRefName,headRefName,author,url
gh pr checks <N>
git fetch origin pull/<N>/head:pr/<N>
```

## Review

- Run review-code on `origin/<base>...pr/<N>`. Keep its findings and citations unchanged.
- Check the title and body against PR Rules.
- Check required checks pass. Report failing or pending ones.
- For Dependabot PRs, check whether the bump matches the Expo SDK version with `npx expo install --check`. Recommend closing PRs that a newer lockfile already covers.

## Report and Post

- Report each PR separately. Lead with its verdict: ready, needs changes, or blocked.
- List violations first, then advisories. Cite the file and line, or the PR field.
- Show the review comment before posting. Post only after approval with `gh pr review <N> --comment --body-file <file>`.

Never approve, request changes, close, or merge unless the user asks.
