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
1. Install packages with `npm install` or `yarn install`
1. Spin up dev environment with `npm run start` or `yarn run start`

## 🤖 What's included


<details>
  <summary><b>Navigation</b></summary>
  
####

The project has updated from react-navigation to `expo-router`, utilizing it for stack, tab, and drawer navigation configurations. The navigation structure consists of a [Drawer](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/home/_layout.tsx) that wraps two Tabs ([Home](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/home/_layout.tsx) and [Profile](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/profile/_layout.tsx)). The Home tab contains [Stack navigation](https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/app/(main)/(tabs)/home/_layout.tsx) for moving between home and details pages, while the Profile tab has Stack navigation for accessing profile and settings pages. This navigation system is designed to be both intuitive and highly customizable to suit specific requirements.

Navigation Hierarchy

```
Root (Drawer Navigation)
  └── Tabs Navigation
        ├── Home Tab
        │   └── Stack Navigation
        │       ├── Home Screen
        │       └── Details Screen
        │
        └── Profile Tab
            └── Stack Navigation
                ├── Profile Screen
                └── Settings Screen
```

</details>

<details>
  <summary><b>Redux</b></summary>

####

Redux Hooks are pre-configured for immediate use.
- Learn how to set up Redux Hooks by reviewing [app.slice.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules/app/app.slice.ts).
- Discover the application of Redux Hooks in [Navigator.tsx](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L18).
    
Access all Redux modules within the [modules folder](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules).The boilerplate includes Redux Hooks integration for straightforward state management. For an illustration of module utilization, refer to [app.slice.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules/app/app.slice.ts).
- To create a new module, replicate [app.slice.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules/app/app.slice.ts), rename it appropriately within the modules directory, and subsequently incorporate the module into the [store](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/utils/store.ts#L9). The process is designed to be straightforward and efficient.

</details>

<details>
  <summary><b>Assets</b></summary>

####

This project centralizes the management of assets, including images, icons, and fonts, within the [theme directory](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/theme). For seamless integration of new assets, ensure their importation into the designated files where they will be utilized. This approach facilitates streamlined access to all assets via the theme structure.
To further optimize performance, asset preloading has been incorporated into the boilerplate. This setup also supports the use of SVG files, offering extensive flexibility in managing visual resources. Assets are made effortlessly accessible for implementation across the project by importing them directly from the theme.


</details>

<details>
  <summary><b>Absolute Paths</b></summary>

####

Navigating through complex project architectures with deeply nested folders often complicates the use of relative paths, potentially leading to errors. To alleviate this issue, our boilerplate simplifies the development process by facilitating the use of absolute paths. This means you can replace convoluted relative paths like `../../../components/Button` with straightforward references such as `@/components/Button` in your import statements.
The implementation for this feature is configured within both the [babel.config.js](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/babel.config.js) and [tsconfig.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/tsconfig.json) files. These configurations ensure a hassle-free experience in utilizing absolute paths across your project, enhancing clarity and reducing the likelihood of path-related errors.


</details>

<details>
  <summary><b>Environment Variables</b></summary>

####

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