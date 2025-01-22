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

## Overview

A powerful React Native boilerplate built with Expo that eliminates setup hassles and gets you coding faster. This template comes pre-configured with essential features like:

- 📱 File-based routing with Expo Router
- 🎨 Light/Dark theme support out of the box
- 🔄 Redux Toolkit for state management
- 🚀 CI/CD workflows ready to go
- 📦 Environment configuration for dev/prod
- ✨ Code quality tools (ESLint, Prettier, Jest)

## 🗒️ Requirements

- [Node: 20.x](https://nodejs.org/en)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/)

## 🚀 Quick Start

1. Download zip or click "Use this template"
2. Install packages with `npm install` or `yarn install`
3. Spin up dev environment with `npm run dev` or `yarn run dev`

## Core Features

<details>
  <summary><b>File-based Router</b></summary>
  
####

The project uses [**Expo Router**](https://docs.expo.dev/router/introduction/) with a pre-configured navigation structure which has updated from react-navigation. The navigation structure is based on file-based routing, making it easier to manage and navigate between screens. The project has a pre-configured navigation structure with a drawer and tab navigation. You can easily add new screens and navigations by following the existing structure:

```
Root (Drawer)
├── Home Tab
│   └── Stack
│       ├── Home Screen
│       └── Details Screen
└── Profile Tab
    └── Stack
        ├── Profile Screen
        └── Details Screen
```

</details>

<details>
  <summary><b>Global State Management</b></summary>

####

### State Management with Redux Toolkit
---

This project uses [**Redux Toolkit**](https://redux-toolkit.js.org/) for global state management, pre-configured with Redux Hooks for immediate use. 

#### Getting Started
1. Explore existing slices in the [`/slices`](https://github.com/wataru-maeda/react-native-boilerplate/tree/feat/expo-router/slices) directory
2. See usage examples in [`/app/_layout.tsx`](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/_layout.tsx#L23)

#### Adding New State
1. Copy [`/slices/app.slice.ts`](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/slices/app.slice.ts)
2. Rename and modify for your needs
3. Add your slice to [`/utils/store.ts`](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/utils/store.ts#L10)

#### Development
Redux logger is enabled by default. To disable, remove the logger from [`/utils/store.ts`](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/utils/store.ts#L13).

</details>

<details>
  <summary><b>Theme Management</b></summary>

####

The project simplifies asset and theme management through a centralized [`/theme`](https://github.com/wataru-maeda/react-native-boilerplate/tree/feat/expo-router/theme) directory that handles images, icons, fonts, and colors, with built-in asset preloading and SVG support for optimal performance, while also providing a custom `useColorScheme` hook (located in [`/hooks/useColorScheme.ts`](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/hooks/useColorScheme.ts)) that automatically detects and adapts colors based on the current theme across both mobile and web platforms - making it easy to implement dynamic theming by returning the current color scheme name and flags (isDark, isLight) for conditional styling.

</details>

<details>
  <summary><b>Alias Paths</b></summary>

####

Navigating through complex project architectures with deeply nested folders often complicates the use of relative paths, potentially leading to errors. To alleviate this issue, our boilerplate simplifies the development process by facilitating the use of absolute paths. This means you can replace convoluted relative paths like `../../../components/Button` with straightforward references such as `@/components/elements/Button` in your import statements.
The implementation for this feature is configured within [tsconfig.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/tsconfig.json#L6-L8) files. These configurations ensure a hassle-free experience in utilizing absolute paths across your project, enhancing clarity and reducing the likelihood of path-related errors.


</details>

<details>
  <summary><b>Environment Variables</b></summary>

####

The project use [dotenvx](https://dotenvx.com/) to load environment variables into the project. Currently Expo and EAS CLI has different behavior when it comes to environment variables. Expo CLI loads `.env` file but EAS CLI doesn't load `.env` file. So we decided to use external env variable library like `dotenvx` to adjust both cases.

The project has pre-configured environment variables for development, and production environments which you can find in [.env.dev.example](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/.env.dev.example) and [.env.production.example](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/.env.prod.example). The configuration allows you to have separate expo project accounts for development and production environments.

To use your own expo project account in development environment for example,
1. Rename .env.dev.example to .env.dev
2. Update `owner` in [app.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app.json#L6) to your expo user name
3. Update `EXPO_SLUG` and `EXPO_PROJECT_ID` in .env.dev file at least

Now all ready to use your own expo project account in development environment.

To add new environment variables to use in your app, you can take 3 steps
1. Add new env variables to the `.env.dev` and `.env.prod` files
2. Load the new env variables in the app.config.ts file, Add them in the [`extra`](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app.config.ts#L27-L29) object
3. Add new env variables in [config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/utils/config.ts#L4-L10)

Once you successfully added the new environments, you'll see at the [bottom sheet](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/components/layouts/BottomSheetContents/BottomSheetContents.tsx#L82-L86) of the app. 

Or check by the command `npm run dev:config:public`. You can see the loaded environment variables in the console.

example:
```
{
...
  extra: {
    env: 'development',
    apiUrl: 'https://example.com',
    eas: {
      projectId: '18adc0d0-eb1d-11e9-8009-d524ed5cc4a7'
    },
    router: {
      origin: false
    }
  },
  androidStatusBar: {
    backgroundColor: '#ffffff'
  }
}
```

Some may consider the project is not using `EXPO_PUBLIC_` prefix for environment variables which is one of the way to access the env variable in client from process.env property. This is because we use .env files to upload the env variables to EAS servers as [`secret`](https://docs.expo.dev/eas/environment-variables/#visibility). Secret cannot include `EXPO_PUBLIC_` prefix. Once you upload the variables to EAS server, those are only readable in EAS servers which mean you can securely read the variables in [EAS build](https://docs.expo.dev/build/introduction/) and [EAS submit](https://docs.expo.dev/submit/introduction/). You can upload the variables to EAS servers from .env.dev and .env.prod files to EAS servers by running `npm run dev:secret:push` so that you do not need to manually upload the variables to EAS servers.

If you are not intend to use the pre-structured env variable flow, you can use `EXPO_PUBLIC_` prefix to easily access env variables from process.env property. But please do not store any sensitive information with the prefix. Otherwise it will be exposed to client. For comprehensive guidelines on securely managing sensitive data, refer to the recommendations provided in [storing sensitive info](https://reactnative.dev/docs/security#storing-sensitive-info).

</details>

<details>
  <summary><b>Distribution</b></summary>

####

- The project is equipped with a streamlined distribution process for both mobile and web platforms. Here's how you can deploy your app to various platforms:

1. **Mobile Distribution**
- Run `npm run dev:build:mobile` to build the app distribution for iOS and Android.
- The build process generates an APK file for Android and an IPA file for iOS, which can be used for further testing or deployment.

2. **Web Distribution**
- Run `npm run dev:deploy:web` to build and deploy the web application to [EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/).
- The deployment process is configured to leverage GitHub Pages, ensuring a seamless and efficient deployment experience.

</details>

<details>
  <summary><b>[CI] Code formatting, linting and testing on pre-commit</b></summary>

####

- Configurations for Eslint, Prettier, and Jest have been meticulously established to ensure your code remains clean and adheres to best practices. Here's a breakdown of how these tools enhance your development workflow:
1. Throughout the coding process, these integrated tools proactively scan and refine your code. Activating the 'Format on Save' feature further streamlines this process, automatically tidying your code with each save.
2. Committing changes triggers a pre-commit script that meticulously checks, formats, and tests your code. This comprehensive review process ensures your contributions are both error-free and stylistically consistent.
3. Successfully navigating through the stages of code verification, formatting, and testing empowers you to commit your changes with absolute confidence. You can rest assured knowing your code is not only efficient but also meets the highest standards of quality and reliability.

</details>

<details>
  <summary><b>[CD] Release previews on Pull-Request (only mobile)</b></summary>

####

- When you've completed your work and need to share a preview with the QA team, our boilerplate automates the distribution process for you. Here's how it works:
1. Whenever you create a pull request (PR) or merge, it automatically generates a preview channel in your Expo account.
2. You don't need to run 'eas' commands every time you create a PR; the process is streamlined for you.
3. The continuous delivery (CD) process is managed through the [preview.yml](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.github/workflows/preview.yml) configuration file, which utilizes [expo-github-action](https://github.com/expo/expo-github-action).

To set up the CD workflow, follow these steps:
1. Create an `EXPO_TOKEN` in your Expo account. You can do this by visiting [this link](https://expo.dev/accounts/%5Baccount%5D/settings/access-tokens).
2. In your GitHub repository, go to **Settings**, then navigate to **Secrets and variables** -> **Actions** -> **Add new repository secret**. Make sure to name the secret as `EXPO_TOKEN`.
3. Update `name`, `slug`, `owner`, `projectId` and `url` in [app.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.json):
4. Update in `name`, `slug`, `projectId`, `ios`, `android` in [app.config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.config.ts)
6. After you push changes to the main branch, a new preview will be created automatically.

</details>

## Available Scripts

Development:
- `npm run dev` - Run on all platforms
- `npm run dev:ios` - Run iOS only
- `npm run dev:android` - Run Android only
- `npm run dev:web` - Run web only

Building:
- `npm run dev:build:mobile` - Build mobile apps
- `npm run dev:build:web` - Build web app
- `npm run dev:deploy:web` - Deploy web app to [EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/)

Testing:
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm run test` - Run Jest tests

## 🧑‍💻 Need native code?

To generate iOS and Android native code, you can run `npx expo prebuild` in the project's root directory. For more details and specific instructions, please refer to the [Expo documentation page](https://docs.expo.dev/workflow/prebuild/).

## 📓 License

This project is available under the MIT license. See the [LICENSE](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/LICENSE) file for more info.