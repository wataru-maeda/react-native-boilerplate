# Rename

Replace the boilerplate's names with the approved names, then remove approved sample files.

## Rename

1. Find every occurrence outside dependencies and build output:

   ```bash
   git grep -n -i -e react-native-boilerplate -e react_native_boilerplate -e "React Native Boilerplate" -e watarumaeda -e '"owner"' -- ':!package-lock.json'
   ```

2. Show the hits grouped by file. Mark any that must stay, such as `LICENSE` or links to the original repository.
3. Replace the approved hits. Cover at least:
   - `package.json` name.
   - `app.json` name, slug, scheme, and owner.
   - Fallback values in `app.config.ts`: project ID, slug, name, bundle ID, and package.
   - `EXPO_SLUG`, `EXPO_NAME`, `EXPO_IOS_BUNDLE_IDENTIFIER`, and `EXPO_ANDROID_PACKAGE` in `.env.dev.example`, `.env.stg.example`, and `.env.prod.example`.
   - The `AGENTS.md` title and the README title. Use `manage-docs`.
4. Clear `EXPO_PROJECT_ID` values and the `app.config.ts` fallback. [services.md](services.md) sets them.
5. Run `npm install` so `package-lock.json` picks up the new name.
6. Rerun the search. Report the hits left on purpose.

## Remove Samples

Remove only approved items:

- `__DELELE_ME__/` and the README images that link to it.
- The welcome bottom sheet in `src/app/_layout.tsx` and `src/components/layouts/BottomSheetContents/`. Update `.maestro/subflows/launch.yaml` when the sheet is removed.
- Delete `ios/` and `android/` if they exist. They keep the old bundle IDs.
