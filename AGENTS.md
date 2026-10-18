# React Native Boilerplate Rules

See [README](./README.md) for setup and structure.

Use Node ≥24 and npm ≥11.

## Before Editing

- Verify rules against code. Correct outdated rules.
- Use `manage-docs` before editing `README.md`, `AGENTS.md`, or skills in `.agents/skills`.
- Keep secrets out of git. Write variable names to `.env.*.example` only.

## Code

- Reuse existing components, hooks, and utilities.
- Import with `@/`, which maps to `src/`. Keep TypeScript strict.
- Export props of reusable elements as `interface <Component>Props`. Import shared types from `@/types`.
- Use function declarations for components. Call hooks before early returns.
- Name components and types in PascalCase. Name utilities in camelCase. Prefix hooks with `use`.
- Keep `console.log` out of production code.

## Screens and Styles

- Put screens in `src/scenes/<name>/<Name>.tsx`. Keep `src/app/` files limited to routing and layouts.
- Put reusable controls in `src/components/elements/`. Put navigation and sheet layouts in `src/components/layouts/`.
- Give each component its own folder with `<Name>.tsx` and an `index.ts` that re-exports it.
- Use Expo Router for navigation. Use `<Redirect>` for rendered redirects. Use `router.push` or `router.replace` in event handlers.
- Import navigation helpers such as `DrawerActions` from `expo-router/react-navigation`. Import themes from `expo-router`. Do not add `@react-navigation/*` packages.
- Use `StyleSheet.create`. Read colors, fonts, and images from `@/theme`.
- Support dark and light mode with `useColorScheme` from `@/hooks/useColorScheme`.
- Import `SafeAreaView` from `react-native-safe-area-context`.

## State and Configuration

- Read app settings from `@/utils/config`. Do not hardcode environment values.
- Add a new environment variable in three places: `.env.*.example`, `extra` in `app.config.ts`, and `src/utils/config.ts`.
- Treat values in `extra` as public. They ship inside the app bundle.
- Read platform and dimensions from `@/utils/deviceInfo`.
- Use `useAppSlice` from `@/slices` for shared app state. Add new state as a slice in `src/slices/` and register it in `src/utils/store.ts`.
- Use `useDataPersist` from `@/hooks` for local storage. Use `useKeyboard` from `@/hooks` for keyboard state.

## API Calls

- Call APIs through `@/services`. Do not call APIs directly from components.
- Put each resource in `src/services/<resource>.service.ts` with `<action><Resource>Async` functions. Export it from `src/services/index.ts`.
- Handle loading and errors. Show readable error messages.

## Dependencies

- Add Expo and React Native packages with `npx expo install <package>` so versions match the SDK.
- Run `npm run dev:doctor` after changing dependencies.
- Load env files with `dotenvx run -f .env.<env>`. Do not add `dotenv-cli`.

## Tests

- Place `*.test.tsx` beside each new component. Test behavior, including success and failure.
- Use React Native Testing Library. Await `render` and user events. Mock external dependencies.
- Add a Maestro flow in `.maestro/` for each new screen or user flow. Target elements by `testID`.
- Start each flow with `runFlow: subflows/launch.yaml`.

## Commands

Run from the repository root. Each environment has its own env file and script prefix:

| Environment | Env file    | Prefix | `ENV`  | EAS build profile |
| ----------- | ----------- | ------ | ------ | ----------------- |
| Development | `.env.dev`  | `dev`  | `dev`  | `development`     |
| Staging     | `.env.stg`  | `stg`  | `stg`  | `staging`         |
| Production  | `.env.prod` | `prod` | `prod` | `production`      |

Copy `.env.<env>.example` to create each file. Each environment uses its own EAS project through `EXPO_PROJECT_ID`.
The commands below use `dev`. Replace it with `stg` or `prod` for the other environments.

- Start: `npm run dev`. Use `dev:ios`, `dev:android`, or `dev:web` for one platform.
- Check Expo setup: `npm run dev:doctor`.
- Show loaded config: `npm run dev:config:public`.
- Build and run native apps locally: `npm run dev:run:ios` or `npm run dev:run:android`.
- Build with EAS: `npm run dev:build:mobile`. It uploads `.env.dev` to the EAS project first.
- Build and deploy web: `npm run dev:deploy:web`. `prod:deploy:web` deploys to the production alias.

`ios/` and `android/` are generated and ignored by git. Delete them before `<env>:run:*` after changing env files or `app.config.ts`.

### Checks

- Check types: `npm run check-types`.
- Lint: `npm run lint`.
- Rewrite formatting: `npm run format`.
- Test: `npm run test`. Watch: `npm run test:watch`.
- Run E2E flows: `npm run e2e` or `npm run e2e:android`. They use `.env.dev`. Install the app with `dev:run:*` first and keep Metro running.

## Git

- Run only requested Git operations.
- Never commit directly to `dev`, `stg`, or `main`.
- Keep each branch and commit focused.
- Submit changes through a PR. Use `manage-prs`.

### Branches

Use `dev` for development, `stg` for staging, and `main` for production. `dev` is the default branch.

| Change            | Branch            | Start from | Merge into                   |
| ----------------- | ----------------- | ---------- | ---------------------------- |
| Feature           | `feat/<name>`     | `dev`      | `dev`                        |
| Fix               | `fix/<name>`      | `dev`      | `dev`                        |
| Refactor          | `refactor/<name>` | `dev`      | `dev`                        |
| Dependencies, SDK | `chore/<name>`    | `dev`      | `dev`                        |
| Docs              | `docs/<name>`     | `dev`      | `dev`                        |
| Staging           | `dev`             | —          | `stg`                        |
| Release           | `stg`             | —          | `main`                       |
| Production fix    | `hotfix/<name>`   | `main`     | `main`, then `stg` and `dev` |

### Commits

Use `type(scope): description`.

- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- Scopes are optional: `deps`, `ios`, `android`, `web`, `ci`.
- The pre-commit hook runs lint, format, and tests on staged files.

### Merge and Version

- Squash merge work branches into `dev`.
- Promote with merge commits: open a PR from `dev` to `stg`, test the staging build, then open a PR from `stg` to `main`.
- After a hotfix reaches `main`, merge `main` back into `stg` and `dev` with merge commits.
- Bump `version` in `package.json` on `dev` before promoting a release.
- Tag releases as `vMAJOR.MINOR.PATCH` on `main`. Use `manage-prs` to publish them.
- Increment major for Expo SDK upgrades and breaking changes, minor for features, and patch for fixes.
