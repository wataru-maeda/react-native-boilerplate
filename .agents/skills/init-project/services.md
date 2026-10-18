# Services

Link the app to EAS, create the env files, and run checks.

## EAS

1. Check the login. Ask the user to run `! npx eas login` when it fails.
2. Create or link the dev and prod projects with the approved slugs. Check whether each exists before creating it.
3. Write each project ID to `EXPO_PROJECT_ID` in its `.env.*.example`. Set the `app.config.ts` fallback to the prod ID.

```bash
npx eas whoami
npx eas init --id <project-id>   # link an existing project
npx eas project:info
```

## Env Files

- Copy `.env.dev.example` to `.env.dev` and `.env.prod.example` to `.env.prod`. Both are ignored by git.
- Add each new variable to the examples, `extra` in `app.config.ts`, and `src/utils/config.ts`.
- Ask the user to fill secret values. Never upload secrets with `dev:secret:push` without approval.

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
