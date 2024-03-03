<img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/banner.png' width='600'>

![CI](https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/preview.yml/badge.svg)
![CI](https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/test.yml/badge.svg)

- [Demo](https://expo.dev/%40wataru/react-native-boilerplate?serviceType=eas&distribution=expo-go&scheme=exp%2Breact-native-boilerplate&channel=main&sdkVersion=50.0.0)

## About

Say goodbye to time-consuming setup tasks like restructuring files, installing libraries, and crafting reusable components. Our project boilerplate is your solution to eliminate redundant work when starting from scratch. It includes only the most commonly-used libraries, so you can hit the ground running with a fully configured setup.

## Environment

- Node: 20.x

## Quick Start

1. Download zip or click "Use this template"
1. Install packages with `npm install` or `yarn install`
1. Spin up dev environment with `npm run start` or `yarn run start`

## What's included

### Navigation

- Utilizes `react-navigation v5` for stack, tab, and drawer navigation configurations as the default setup.
- Flexibility in modifying navigation styles. For adjustments to the navigation style, refer to the implementation details in [Stack.tsx](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/stack/Stack.tsx), [Drawer.tsx](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/drawer/Drawer.tsx), and [Tab.tsx](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/tab/Tab.tsx).
- Simplified navigation structure customization:
  - To omit a navigation type, such as drawer navigation, simply remove the corresponding drawer file. Alterations to the navigation type can be effortlessly made by substituting the navigation configuration in [Navigator.tsx](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L5) with your preferred choice between tab or stack navigation.
- Dynamic navigation switching based on user status:
  - Integration of login and signup functionality is crucial for apps requiring user authentication. The navigation scheme should adapt according to the user's authentication status.
  - The [navigator](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L17-L22) allows for the configuration of distinct navigation paths contingent on whether the user is logged in or not.

### Redux

- Redux Hooks are pre-configured for immediate use.
  - Learn how to set up Redux Hooks by reviewing [app.slice.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules/app/app.slice.ts).
  - Discover the application of Redux Hooks in [Navigator.tsx](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L18).
- Access all Redux modules within the [modules folder](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules).
- The boilerplate includes Redux Hooks integration for straightforward state management. For an illustration of module utilization, refer to [app.slice.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules/app/app.slice.ts).
- To create a new module, replicate [app.slice.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules/app/app.slice.ts), rename it appropriately within the modules directory, and subsequently incorporate the module into the [store](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/utils/store.ts#L9). The process is designed to be straightforward and efficient.

### Assets

- This project centralizes the management of assets, including images, icons, and fonts, within the [theme directory](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/theme). For seamless integration of new assets, ensure their importation into the designated files where they will be utilized. This approach facilitates streamlined access to all assets via the theme structure.
- To further optimize performance, asset preloading has been incorporated into the boilerplate. This setup also supports the use of SVG files, offering extensive flexibility in managing visual resources. Assets are made effortlessly accessible for implementation across the project by importing them directly from the theme.

### Absolute Paths

- Navigating through complex project architectures with deeply nested folders often complicates the use of relative paths, potentially leading to errors. To alleviate this issue, our boilerplate simplifies the development process by facilitating the use of absolute paths. This means you can replace convoluted relative paths like `../../../components/Button` with straightforward references such as `components/Button` in your import statements.
- The implementation for this feature is configured within both the [babel.config.js](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/babel.config.js) and [tsconfig.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/tsconfig.json) files. These configurations ensure a hassle-free experience in utilizing absolute paths across your project, enhancing clarity and reducing the likelihood of path-related errors.

### Environment Variables

- Environment variables can be defined within the respective files for different deployment stages: [.env.development](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.env.development) for development settings, [.env.production](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.env.production) for production configurations, and [.env.test](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.env.test) for test environments.
- To initiate the project in a development environment, execute `npm run start:dev`. Conversely, for launching the project in a production setting, use `npm run start`.
- It is imperative to avoid storing sensitive information, such as private keys, within variables prefixed by `EXPO_PUBLIC_`. For comprehensive guidelines on securely managing sensitive data, refer to the recommendations provided in [storing sensitive info](https://reactnative.dev/docs/security#storing-sensitive-info).

1. Add a new script in your [package.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/package.json#L9) with the command `APP_ENV=dev npx expo start -c`.

2. In the [app.config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.config.ts#L12) file, create a 'dev' configuration as an example.

3. Populate the environment variables specific to each environment in the [config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/utils/config.ts#L5) file.

For more details on dynamic configuration, you can refer to the [Expo documentation page](https://docs.expo.dev/workflow/configuration/#dynamic-configuration).

### Code formatting, fixing and testing on pre-commit [CI]

Maintaining clean code is crucial for readability and productivity. In this boilerplate, we've set up configurations for Eslint, Prettier, and Jest to help you achieve just that. Here's how it works:

1. While you're coding, these tools continuously check and format your code. You can enable the 'Format on Save' option to automatically format your code after saving changes.

2. When you submit changes, a pre-commit script runs, which checks and formats your code and runs tests.

3. If all three steps (code checking, formatting, and testing) pass successfully, you'll be able to push your changes with confidence, knowing that your code is clean and reliable.

### Create previews on PR [CD]

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

<img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/demo.gif' width='32%'>
