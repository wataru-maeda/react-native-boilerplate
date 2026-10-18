# Create Release

Follow [Git rules](../../../AGENTS.md#git).
Release after [promote.md](promote.md) has merged `stg` into `main`. Use the `version` in `package.json` on `main`. Never bump versions in this skill.
For notes-only requests, stop after drafting notes.

## Inspect

- Check the working tree and the exact target commit on `main`.
- Verify the version bump merged into `dev` and the promotion PR merged into `main`.
- Check reviews, relevant tests, lint, and types. Report missing or failed evidence.
- Inspect existing local and remote tags and GitHub releases.
- Read commits and changes since the previous release.

Run from the repository root:

```bash
git status --short
git branch --show-current
git rev-parse HEAD
git tag --list 'v*' --sort=-version:refname
git ls-remote --tags origin
node -p "require('./package.json').version"
gh release view <previous-tag>
git log --oneline <previous-tag>..<target-commit>
git diff --stat <previous-tag>..<target-commit>
```

Skip previous-release commands for the first release.
Do not pull or merge merely to inspect the target.

## Verify Version

- Use `v<package.json version>` as the release tag.
- Require the version to be ahead of the latest release version. Compare versions numerically.
- If the version is unchanged or older, stop. Request a version-bump PR following [Merge and Version](../../../AGENTS.md#merge-and-version).
- If no previous tag exists, use the current version for the first release.
- If the tag or release already exists, inspect it. Do not overwrite, delete, or recreate it without explicit instructions.

## Draft Notes

- Describe user-visible changes from the actual commits and diff.
- Group relevant items into Highlights, Breaking Changes, Other Changes, and Known Issues. Omit empty groups.
- Name the Expo SDK, React Native, and React versions in Highlights when they change.
- Call out breaking changes and required migration steps.
- Link known issues and the previous-to-new version comparison.
- State EAS build or update results only when verified. Publishing a release is not evidence of a build.

## Publish

1. Show the version, target commit, title, and full notes.
2. Wait for approval before pushing a tag or publishing. Do not ask again for an already-approved result.
3. Create an annotated tag at the confirmed commit.
4. Push that tag and publish the release using a notes file.
5. Verify the remote tag and release. Return the release URL.

```bash
git tag -a v<version> <target-commit> -m "v<version> - <summary>"
git push origin v<version>
gh release create v<version> --verify-tag --title "v<version> - <title>" --notes-file <notes-file>
gh release view v<version>
```

If publication fails after the tag push, inspect both before retrying.
Do not delete a published tag as automatic recovery.

## Follow-up

- Offer to update the GitHub repository description and topics when the SDK or features changed. Show the text before running `gh repo edit`.
- Offer to close Dependabot PRs that the release already covers. Close them only after approval.
- Do not deploy, merge branches, or change versions as an unrequested follow-up.
