# React Native Boilerplate

<h1 align="center">
  <img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/banner.png' width='600'>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." />
  <img src="https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/preview.yml/badge.svg" alt="" />
  <img src="https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/test.yml/badge.svg" alt="" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
</p>

<p align="center">
  <img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/__DELELE_ME__/demo-light-theme.gif' width='150px'>
  <img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/__DELELE_ME__/demo-dark-theme.gif' width='150px'>
</p>

Skip the tedious setup process and jump straight into development. This boilerplate eliminates common setup tasks by providing a pre-configured project with essential libraries and components. Start building your app immediately with battle-tested tools and practices.

## 🗒️ Requirements

- [Node: 20.x](https://nodejs.org/en)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/)

## 🚀 Quick Start

1. Download zip or click "Use this template"
2. Install packages with `npm install` or `yarn install`
3. Spin up dev environment with `npm run start` or `yarn run start`

## 🤖 What's included

<details>
  <summary><b>File-based Router</b></summary>
  
####

Experience seamless navigation with `expo-router`, which replaces the traditional react-navigation setup. The navigation structure features a drawer menu that contains two main tabs: home and profile. Each tab has its own stack navigation for smooth screen transitions.

Navigation Hierarchy:
```
root (drawer navigation)
  └── tabs navigation
        ├── home tab
        │   └── stack navigation
        │       ├── home screen
        │       └── details screen
        │
        └── profile Tab
            └── stack Navigation
                ├── profile screen
                └── settings screen
```

The setup includes:
- A [drawer](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/home/_layout.tsx) for main navigation
- [Home tab](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/home/_layout.tsx) with detailed pages
- [Profile tab](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/profile/_layout.tsx) with settings

</details>

<details>
  <summary><b>Global State Management</b></summary>

####

Manage your app's state effortlessly with Redux Toolkit. The setup is ready to use with Redux Hooks integration. 

Key features:
- Pre-configured Redux setup in the [slices](https://github.com/wataru-maeda/react-native-boilerplate/tree/feat/expo-router/slices) directory
- Working example in [root layout](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/_layout.tsx#L23)
- Development mode includes Redux logger for easy debugging

Adding a new state slice is simple:
1. Copy [app.slice.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/slices/app.slice.ts)
2. Add it to the [store](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/utils/store.ts#L10)

</details>

<details>
  <summary><b>Centralized Theme</b></summary>

####

Keep your app's look consistent with our centralized theme system in the [theme directory](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/theme). All assets, including images, icons, fonts, and colors, are managed in one place for easy updates and maintenance.

Features:
- Built-in asset preloading for better performance
- SVG support for scalable graphics
- Easy theme switching with [`useColorScheme`](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/hooks/useColorScheme.ts) hook
- Automatic dark/light mode detection

</details>

<details>
  <summary><b>Alias Paths</b></summary>

####

Say goodbye to messy relative imports like `../../../components/Button`. Use clean, absolute paths such as `@/components/elements/Button` instead. This feature is configured in [tsconfig.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/tsconfig.json#L6-L8) and makes your imports more maintainable and error-resistant.

</details>

<details>
  <summary><b>Environment Variables</b></summary>

####

Manage different environments seamlessly using [dotenvx](https://dotenvx.com/). This setup handles both Expo CLI and EAS CLI environments effectively.

Quick setup:
1. Change `.env.dev.example` to `.env.dev`
2. Set your expo username as `owner` in [app.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app.json#L6)
3. Update `EXPO_SLUG` and `EXPO_PROJECT_ID` in `.env.dev`

Adding new environment variables:
1. Add them to `.env.dev` and `.env.prod`
2. Include in [`extra`](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app.config.ts#L27-L29) object
3. Add to [config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/utils/config.ts#L4-L10)

Check your environment setup with `npm run dev:config:public`

</details>

<details>
  <summary><b>Distribution</b></summary>

####

Deploy your app with confidence using our streamlined distribution process:

Mobile Distribution:
- Run `npm run dev:build:mobile` to create iOS and Android builds

Web Distribution:
- Use `npm run dev:deploy:web` to deploy to [EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/)

</details>

<details>
  <summary><b>[CI] Code formatting, linting and testing on pre-commit</b></summary>

####

Maintain code quality automatically with our integrated tools:

1. Real-time code checking and formatting while you work
2. Automatic pre-commit checks ensure code quality
3. Comprehensive testing before each commit

</details>

<details>
  <summary><b>[CD] Release previews on Pull-Request (only mobile)</b></summary>

####

Share your work easily with automated preview builds:

1. Each pull request creates a preview in your Expo account
2. No manual EAS commands needed
3. Setup process:
   - Get `EXPO_TOKEN` from [Expo Access Tokens](https://expo.dev/accounts/%5Baccount%5D/settings/access-tokens)
   - Add token to GitHub repository secrets
   - Update project details in [app.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.json) and [app.config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.config.ts)

</details>

## 🧑‍💻 Need native code?

Generate native iOS and Android code easily:
```bash
npx expo prebuild
```
See the [Expo documentation](https://docs.expo.dev/workflow/prebuild/) for detailed instructions.

## 🥇 Libraries

Core Libraries:
- [expo v52](https://docs.expo.dev/versions/v52.0.0)
- [expo-asset](https://docs.expo.dev/versions/latest/sdk/asset/)
- [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/)
- [expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
- [expo-router](https://github.com/react-navigation/react-navigation)
- [redux-toolkit](https://redux-toolkit.js.org/)

## 🥈 Libraries for development

Developer Tools:
- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [jest](https://jestjs.io/)
- [lint-staged](https://github.com/okonet/lint-staged)

## ☀️ Icons

Browse and use Expo's vector icons from the [Icon Directory](https://icons.expo.fyi/)

## ⚙️ Scripts

Development Commands:
- `dev`: Run on all platforms
- `dev:ios`: Launch iOS app
- `dev:android`: Launch Android app
- `dev:web`: Launch web app
- `dev:doctor`: Check project health
- `dev:secret:push`: Upload env variables to EAS
- `dev:secret:list`: View EAS secrets
- `dev:build:mobile`: Create mobile builds
- `dev:build:web`: Create web build
- `dev:deploy:web`: Deploy to EAS Hosting
- `dev:config:public`: View loaded env variables

Quality Assurance:
- `lint`: Check code style
- `lint:staged`: Check staged files
- `format`: Fix code style
- `test`: Run all tests
- `test:watch`: Run tests continuously

Note: Use `prod` instead of `dev` in commands to use production environment variables.

## 📓 License

This project is available under the MIT license. See the [LICENSE](LICENSE) file for more info.