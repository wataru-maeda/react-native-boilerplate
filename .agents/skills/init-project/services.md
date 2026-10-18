# Services

Link the app to EAS, create the env files, and run checks.

## EAS

1. Check the login. Ask the user to run `! npx eas login` when it fails.
2. Create or link the dev, stg, and prod projects with the approved slugs. Check whether each exists before creating it.
3. Write each project ID to `EXPO_PROJECT_ID` in its `.env.*.example`. Set the `app.config.ts` fallback to the prod ID.

```bash
npx eas whoami
npx eas init --id <project-id>   # link an existing project
npx eas project:info
```

## Env Files

- Copy each `.env.<env>.example` to `.env.<env>` for `dev`, `stg`, and `prod`. They are ignored by git.
- Add each new variable to the examples, `extra` in `app.config.ts`, and `src/utils/config.ts`.
- Ask the user to fill secret values. Never upload secrets with `<env>:secret:push` without approval.

## Branches

- Check that `dev`, `stg`, and `main` exist on the remote. Ask before creating missing ones.
- Ask the user to set `dev` as the default branch in GitHub settings.

## CI

- Ask the user to add `EXPO_TOKEN` as a repository secret for `.github/workflows/preview.yml`. Never handle the token yourself.

## Verify

Run from the repository root:

```bash
npm run dev:config:public
npm run dev:doctor
npm run check-types
npm run lint
npm run test
```

Check that `dev:config:public` shows the new names and IDs. Record failures with their cause. Do not fix unrelated failures.
