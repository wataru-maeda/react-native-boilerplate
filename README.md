<img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/banner.png' width='400'>

![CI](https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/preview.yml/badge.svg)
![CI](https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/test.yml/badge.svg)

<img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/demo.gif' width='32%'>


- [Demo](https://expo.dev/%40wataru/react-native-boilerplate?serviceType=eas&distribution=expo-go&scheme=exp%2Breact-native-boilerplate&channel=main&sdkVersion=49.0.0)

## About

Say goodbye to time-consuming setup tasks like restructuring files, installing libraries, and crafting reusable components. Our project boilerplate is your solution to eliminate redundant work when starting from scratch. It includes only the most commonly-used libraries, so you can hit the ground running with a fully configured setup.

## Environment

- Node: 16.x

## Quick Start

1. Download zip or click "Use this template"
2. Update `app.json`

```
 "name": "{your-project-name}",
 "slug": "{your-project-name}",
 ...
 # 👇 Please comment out the following lines or replace them with your project ID
 "extra": {
    "eas": {
      "projectId": "{your-expo-project-id}"
    }
  },
  "updates": {
    "url": "https://u.expo.dev/{your-expo-project-id}"
  },
```

3. Install packages with `npm install` or `yarn install`
4. Spin up dev environment with `npm run start` or `yarn run start`

## What's included

#### Navigation

By default, you'll find [3 types of navigation](https://github.com/wataru-maeda/react-native-boilerplate/tree/main/src/navigator) in the project: stack, tab, and drawer. These navigation types have their corresponding files organized in the project structure. If, for instance, you don't require drawer navigation, you can simply remove the drawer file. Additionally, you can easily make the necessary adjustment by replacing the navigation type [here](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L5) with either tab or stack navigation.

#### Authentication

If your app requires authorization, it's essential to implement login and signup functionality. The navigation flow should vary based on the user's login or logout status. In the [navigator](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L17-L22), you can configure distinct navigation routes depending on the user's login status.

#### Redux

We've simplified the Redux configuration in this project using [Redux Toolkit](https://redux-toolkit.js.org/), which efficiently manages the global state of the app. All Redux modules can be found in the [module folder](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules). Each module file contains **actions, reducers, and hooks**. For a practical example of how to use a module, you can refer to the [app module](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules/app.module.ts) file. 

If you need to create a new module, start by duplicating the app module and giving it a new name in the module directory. After that, import the module in the [store](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/utils/store.ts#L9) file—simple as that. 

For more detailed instructions, you can follow the [quick start tutorials](https://redux-toolkit.js.org/tutorials/quick-start), which provide guidance on setting up the store and utilizing Redux state and actions within React components.

#### Assets

Assets such as images, icons, and fonts are centrally managed in the [theme](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/theme) section of the project. When you introduce new assets, it's important to import them into the respective files where you intend to use them, enabling easy access to these resources through the theme.

Additionally, we've implemented asset preloading in the boilerplate to enhance performance. Furthermore, you have the flexibility to utilize SVG files in your project. All assets are readily available for use by importing them from the theme.

#### Absolute path

Managing complex project structures with nested folders can often lead to issues with relative paths. However, in this boilerplate, we've simplified things by enabling the use of absolute paths. Now, instead of writing lengthy and error-prone relative paths like '../../../components/Button', you can simply use 'components/Button' in your import statements.

This configuration is set up in both [babel.config.js](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/babel.config.js) and [tsconfig.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/tsconfig.json), making it easy to work with absolute paths throughout your project.

#### Environment Variables

To switch between different development environments, such as adding a 'dev' environment, follow these steps:

1. Add a new script in your [package.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/package.json#L9) with the command `APP_ENV=dev npx expo start -c`.

2. In the [app.config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.config.ts#L12) file, create a 'dev' configuration as an example.

3. Populate the environment variables specific to each environment in the [config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/utils/config.ts#L5) file.

For more details on dynamic configuration, you can refer to the [Expo documentation page](https://docs.expo.dev/workflow/configuration/#dynamic-configuration).

#### Code formatting, fixing and testing on pre-commit [CI]

Maintaining clean code is crucial for readability and productivity. In this boilerplate, we've set up configurations for Eslint, Prettier, and Jest to help you achieve just that. Here's how it works:

1. While you're coding, these tools continuously check and format your code. You can enable the 'Format on Save' option to automatically format your code after saving changes.

2. When you submit changes, a pre-commit script runs, which checks and formats your code and runs tests.

3. If all three steps (code checking, formatting, and testing) pass successfully, you'll be able to push your changes with confidence, knowing that your code is clean and reliable.

#### Create previews on PR [CD]

When you've completed your work and need to share a preview with the QA team, our boilerplate automates the distribution process for you. Here's how it works:

1. Whenever you create a pull request (PR) or merge changes into the **main** branch, it automatically generates a preview channel in your Expo account.

2. You don't need to run 'eas' commands every time you create a PR; the process is streamlined for you.

3. The continuous delivery (CD) process is managed through the [preview.yml](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.github/workflows/preview.yml) configuration file, which utilizes [expo-github-action](https://github.com/expo/expo-github-action).

To set up the CD workflow, follow these steps:

1. Create an `EXPO_TOKEN` in your Expo account. You can do this by visiting [this link](https://expo.dev/accounts/%5Baccount%5D/settings/access-tokens).

2. In your GitHub repository, go to **Settings**, then navigate to **Secrets and variables** -> **Actions** -> **Add new repository secret**. Make sure to name the secret as `EXPO_TOKEN`.

3. After you push changes to the main branch, a new preview will be created automatically.

## Need native code?

To generate iOS and Android native code, you can run `npx expo prebuild` in the project's root directory. For more details and specific instructions, please refer to the [Expo documentation page](https://docs.expo.dev/workflow/prebuild/).

## Libraries

- [expo v49](https://docs.expo.dev/versions/v49.0.0)
- [expo-asset](https://docs.expo.dev/versions/latest/sdk/asset/)
- [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/)
- [expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
- [expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)
- [react-navigation 6.x](https://github.com/react-navigation/react-navigation)
- [redux-toolkit](https://redux-toolkit.js.org/)
- [redux-logger](https://github.com/LogRocket/redux-logger)

## Libraries for development

- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [jest](https://jestjs.io/)
- [lint-staged](https://github.com/okonet/lint-staged)

## Icons

Expo provides a popular set of vector icons. Please search icons from [here](https://icons.expo.fyi/)


## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/LICENSE) file for more info.
