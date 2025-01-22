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
  <img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/__DELELE_ME__/demo-dark-theme.gif' width='150px'>
  <img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/__DELELE_ME__/demo-light-theme.gif' width='150px'>
</p>

Say goodbye to time-consuming setup tasks like restructuring files, installing libraries, and crafting reusable components. Our project boilerplate is your solution to eliminate redundant work when starting from scratch. It includes only the most commonly-used libraries, so you can hit the ground running with a fully configured setup.

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

The project has updated from react-navigation to `expo-router`, utilizing it for stack, tab, and drawer navigation configurations. 

The navigation structure consists of a [drawer](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/home/_layout.tsx) that wraps two Tabs ([home tab](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/home/_layout.tsx) and [profile tab](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/profile/_layout.tsx)). The Home tab contains [stack](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/home/_layout.tsx) navigation for moving between home and details pages, while the Profile tab has Stack navigation for accessing profile and settings pages. This navigation system is designed to be both intuitive and highly customizable to suit specific requirements.

Navigation Hierarchy

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

</details>

<details>
  <summary><b>Color Theme</b></summary>
  
####

The project initially setup with color schema hook which you can easily detect the current theme from the book. Switch color based on the theme. You can import [`useColorScheme`]() hook which adapt both mobile and web. The hook return the current color scheme name and flag (isDark, isLight). So it's easy to switch the color based on the theme.

</details>

<details>
  <summary><b>Global State (Redux)</b></summary>

####

Global state is quite important for app state management. The project uses Redux Toolkit for global state management. The project has pre-configured Redux Toolkit with Redux Hooks for immediate use. You can easily set up Redux Hooks by reviewing under [slices](https://github.com/wataru-maeda/react-native-boilerplate/tree/feat/expo-router/slices) directory. The application of Redux Hooks example (how to read and write) can be found in [root layout](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/_layout.tsx#L23)

To add a new slice, you can copy and past [app.slice.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/slices/app.slice.ts) under slices directory and rename it. Then you can add the slice to the [store](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/utils/store.ts#L10)

</details>

<details>
  <summary><b>Theme</b></summary>

####

This project centralizes the management of assets, including images, icons, fonts, colors within the [theme directory](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/theme). For seamless integration of new assets, ensure their importation into the designated files where they will be utilized. This approach facilitates streamlined access to all assets via the theme structure.
To further optimize performance, asset preloading has been incorporated into the boilerplate. This setup also supports the use of SVG files, offering extensive flexibility in managing visual resources. Assets are made effortlessly accessible for implementation across the project by importing them directly from the theme.

</details>

<details>
  <summary><b>Absolute Paths</b></summary>

####

Navigating through complex project architectures with deeply nested folders often complicates the use of relative paths, potentially leading to errors. To alleviate this issue, our boilerplate simplifies the development process by facilitating the use of absolute paths. This means you can replace convoluted relative paths like `../../../components/Button` with straightforward references such as `@/components/elements/Button` in your import statements.
The implementation for this feature is configured within [tsconfig.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/tsconfig.json#L6-L8) files. These configurations ensure a hassle-free experience in utilizing absolute paths across your project, enhancing clarity and reducing the likelihood of path-related errors.


</details>

<details>
  <summary><b>Environment Variables</b></summary>

####

The project use [dotenvx](https://dotenvx.com/) to load environment variables into the project. Currently Expo CLI and EAS CLI has different environment variable management. Expo CLI supports `.env` file but EAS CLI doesn't support `.env` file. So we need to use external env variable library like `dotenvx` to load environment variables to adjust both cases.

The project has pre-configured environment variables for development, and production environments which you can find in [.env.dev.example](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/.env.dev.example) and [.env.production.example](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/.env.prod.example). The configuration allows you to have separate expo project accounts for development and production environments.

To use your own expo project account in development environment for example,
1. Rename .env.dev.example to .env.dev
2. Update `owner` in [app.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app.json#L6) to your expo user name
3. Update `EXPO_SLUG` and `EXPO_PROJECT_ID` in .env.dev file at least
Now all ready to use your own expo project account in development environment.

To check if environment variables are propery loaded by command `npm run dev:config:public`. You can see the loaded environment variables in the console.

example:
```
{
  name: 'React Native Boilerplate',
  slug: 'react-native-boilerplate',
  version: '3.0.0',
  owner: 'wataru',
  newArchEnabled: true,
  platforms: [
    'ios',
    'android',
    'web'
  ],
  orientation: 'portrait',
  icon: './assets/images/logo-lg.png',
  userInterfaceStyle: 'automatic',
  description: undefined,
  sdkVersion: '52.0.0',
  plugins: [
    'expo-router',
    'expo-asset',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#ffffff',
        image: './assets/images/logo-lg.png',
        imageWidth: 200,
        resizeMode: 'contain',
        dark: {
          backgroundColor: '#101212'
        }
      }
    ],
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/OpenSans-Bold.ttf',
          './assets/fonts/OpenSans-BoldItalic.ttf',
          './assets/fonts/OpenSans-Italic.ttf',
          './assets/fonts/OpenSans-Regular.ttf',
          './assets/fonts/OpenSans-Semibold.ttf',
          './assets/fonts/OpenSans-SemiboldItalic.ttf'
        ]
      }
    ]
  ],
  splash: {
    backgroundColor: '#ffffff',
    image: './assets/images/logo-lg.png',
    resizeMode: 'contain',
    dark: {
      backgroundColor: '#101212'
    }
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.watarumaeda.react-native-boilerplate'
  },
  android: {
    package: 'com.watarumaeda.react_native_boilerplate',
    adaptiveIcon: {
      foregroundImage: './assets/images/logo-sm.png',
      backgroundColor: '#ffffff'
    }
  },
  web: {
    favicon: './assets/images/logo-sm.png'
  },
  runtimeVersion: {
    policy: 'sdkVersion'
  },
  updates: {
    url: 'https://u.expo.dev/18adc0d0-eb1d-11e9-8009-d524ed5cc4a7'
  },
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

Environment variables can be defined within the respective files for different deployment stages: [.env.development](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.env.development) for development, [.env.production](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.env.production) for production, and [.env.test](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.env.test) for test.
- To spinup the project in a ***development*** environment, execute `npm run start:dev`. Conversely, for launching the project in a ***production***, use `npm run start`.
- It is imperative to avoid storing sensitive information, such as private keys, within variables prefixed by `EXPO_PUBLIC_`. For comprehensive guidelines on securely managing sensitive data, refer to the recommendations provided in [storing sensitive info](https://reactnative.dev/docs/security#storing-sensitive-info).

</details>

<details>
  <summary><b>Web Development</b></summary>
  
####

The project supports web development through Expo Web, enabling you to build and deploy your React Native application for browsers.
- Run `npm run web` or `yarn web` to start the development server for web.
- Execute `npm run dev:deploy:web` to build and deploy your web application in one step.
- Web-specific configurations can be adjusted in [app.config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.config.ts) under the `web` property.
- The deployment process utilizes GitHub Pages, configured through the project's GitHub repository settings.

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
  <summary><b>[CD] Release previews on Pull-Request</b></summary>

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

## 🧑‍💻 Need native code?

To generate iOS and Android native code, you can run `npx expo prebuild` in the project's root directory. For more details and specific instructions, please refer to the [Expo documentation page](https://docs.expo.dev/workflow/prebuild/).

## 🥇 Libraries

- [expo v52](https://docs.expo.dev/versions/v52.0.0)
- [expo-asset](https://docs.expo.dev/versions/latest/sdk/asset/)
- [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/)
- [expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
- [expo-router](https://github.com/react-navigation/react-navigation)
- [redux-toolkit](https://redux-toolkit.js.org/)

## 🥈 Libraries for development

- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [jest](https://jestjs.io/)
- [lint-staged](https://github.com/okonet/lint-staged)

## ☀️ Icons

Expo provides a popular set of vector icons. Please search icons from [here](https://icons.expo.fyi/)


## 📓 License

This project is available under the MIT license. See the [LICENSE](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/LICENSE) file for more info.