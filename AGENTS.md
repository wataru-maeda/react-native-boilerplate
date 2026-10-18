# React Native Boilerplate Rules

See [README](./README.md) for setup and structure.

Use Node ≥24 and npm ≥11.

## Code

- Reuse existing components, hooks, and utilities.
- Import with `@/`, which maps to `src/`. Keep TypeScript strict.
- Define component props with an exported `interface` named `<Component>Props`. Import shared types from `@/types`.
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
- Support dark and light mode with `useColorScheme` from `@/hooks`.
- Import `SafeAreaView` from `react-native-safe-area-context`.

## State and Configuration

- Read app settings from `@/utils/config`. Do not hardcode environment values.
- Add a new environment variable in three places: `.env.*.example`, `extra` in `app.config.ts`, and `src/utils/config.ts`.
- Read platform and dimensions from `@/utils/deviceInfo`.
- Use `useAppSlice` from `@/slices` for shared app state. Add new state as a slice in `src/slices/` and register it in `src/utils/store.ts`.
- Use `useDataPersist` from `@/hooks` for local storage.
- Use `useKeyboard` from `@/hooks` for keyboard state.

## API Calls

- Call APIs through `@/services`. Do not call APIs directly from components.
- Put each resource in `src/services/<resource>.service.ts` with `<action><Resource>Async` functions, and export it from `src/services/index.ts`.
- Handle loading and errors. Show readable error messages.

## Dependencies

- Add Expo and React Native packages with `npx expo install <package>` so versions match the SDK.
- Run `npm run dev:doctor` after changing dependencies.

## Tests

- Place `*.test.tsx` beside each new component.
- Test behavior, including success and failure.
- Mock external dependencies.
- Use React Native Testing Library. Await `render` and user events.
- Add a Maestro flow in `.maestro/` for each new user-facing screen or flow. Target elements by `testID`.
- Run type, lint, format, and test checks before committing.

## Commands

- Start: `npm run dev`. Use `dev:ios`, `dev:android`, or `dev:web` for one platform.
- Check Expo setup: `npm run dev:doctor`.
- Build with EAS: `npm run dev:build:mobile`.
- Build and deploy web: `npm run dev:deploy:web`.

`dev` commands load `.env.dev`. Copy `.env.dev.example` to create it.

### Checks

- Check types: `npm run check-types`.
- Lint: `npm run lint`.
- Rewrite formatting: `npm run format`.
- Test: `npm run test`.
- Watch tests: `npm run test:watch`.
- Run E2E flows: `npm run e2e`. Build and install the app on a simulator first with `npm run dev:run:ios`.

`ios/` and `android/` are generated and ignored by git. Delete them before `dev:run:*` after changing `.env.dev` or `app.config.ts`.

## Git

- Never commit directly to `main`.
- Use `type(scope): description` for commits. Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- The pre-commit hook runs lint, format, and tests on staged files.
- Tag releases as `vMAJOR.MINOR.PATCH`. Increment major for SDK upgrades and breaking changes.
