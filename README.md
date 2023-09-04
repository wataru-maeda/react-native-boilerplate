<img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/banner.png' width='400'>

![CI](https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/preview.yml/badge.svg)
![CI](https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/test.yml/badge.svg)

<img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/demo.gif' width='32%'>


- [Demo](https://expo.dev/%40wataru/react-native-boilerplate?serviceType=eas&distribution=expo-go&scheme=exp%2Breact-native-boilerplate&channel=main&sdkVersion=49.0.0)

## About

We spend a large amount of time to setup a project; changing file structure, installing libraries, creating reusable components, and so on. The purpose of using the project is to minimize the redundant effort to setup a project from scratch. In the boilerplate, it contains only commonly-used libraries and the all setup is done for you.

## Environment

- Node: 16.x

## What's included

#### Navigation

At default, you can see [3 types of navigation](https://github.com/wataru-maeda/react-native-boilerplate/tree/main/src/navigator); stack, tab, and drawer. The files are separated by the navigation types. If you don't need drawer navigation for example, you can remove the drawer file and replace [here](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L5) with tab or stack navigator.

#### Authentication

If your app requires authorization, you need to implement login, signup function. After the user login or logout, the navigation flow should be different. In this case, the route should be switched by the login status. In the [navigator](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L17-L22), you can set the different navigation changed by login status.

#### Redux

We are using [redux toolkit](https://redux-toolkit.js.org/) to simplify redux configuration. Redux can contain the global state of the app. In the boilerplate, all of the redux modules are placed in the [module folder](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules). The module file contain ***actions, reducers and hook***. You can check in the [app module](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/modules/app.module.ts) file. Here is a [example](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L8) how to use the module.

If you want to add a new module, copy and paste the app module in the module directory first. Rename it. Then import the module in the [store](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/utils/store.ts#L9) file, that't it. If you need more instruction, please follow the [quick start tutorials](https://redux-toolkit.js.org/tutorials/quick-start) to see how store is setup; and how to use Redux state and actions in React Components.

#### Assets

Images, icons and fonts are controlled under [theme](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/theme). If you add new assets, you need to import the new assets in each file to access the assets from the theme. Also, assets preloading is implemented as well. You can also use svg file in the boilerplate. All the assets are ready to use by importing the theme.

#### Absolute path

If your project structure becomes complicated and has a lot of nested folders, you will have problems with relative paths. In the boilerplate, you can use absolute paths. You write a simple import statement i.e. 'components/Button'. No more ../../../components/Button. The configuration is written in [babel.config.js](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/babel.config.js) and [tsconfig.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/tsconfig.json).

#### Environment Variables

You may want to switch environment variables based on the development stage. If you want to add `dev` environment for example, 
- Add a new script `APP_ENV=dev npx expo start -c` in [scripts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/package.json#L9)
- Add dev configuration in app.config.ts ([example](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.config.ts#L12))
- Populate the environment variables in [config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/utils/config.ts#L5)

If you'd like to know more about dynamic configuration, please check the [page](https://docs.expo.dev/workflow/configuration/#dynamic-configuration).

#### Code formatting, fixing and testing on pre-commit [CI]

It's very important to keep code clean to maintain readability and productivity. In the boilerplate, Eslint, Prettier and Jest configurations are done. It's continuously checking and formatting your code while you coding (Please enable "Format on Save" option if you prefer to format code after saving change). After you submit changes, pre-commit script will run to handle checking and formatting your code, run test. If the 3 steps are passed, you will be able to push the change.

#### Create previews on PR [CD]

Once you complete your work, you may want to share the preview with the QA team. The boilerplate automate the distribution process. When you create PR or merged in  the **main** branch, it create preview channel in your expo account. You do not need to run eas command everytime PR created. You can check the CD configuration [here](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/.github/workflows/preview.yml). For the CD process, we use [expo-github-action](https://github.com/expo/expo-github-action).

To spin up CD workflow, you'll need to create `EXPO_TOKEN` in expo account and add it in your github repo Settings > Secrets > Actions. Please read the [readme page](https://github.com/expo/expo-github-action#configuration-options) for more instructions.

## Want native code?

You can run `npx expo prebuild` in the project root to generate ios and android native code. Please check the [page](https://docs.expo.dev/workflow/prebuild/) for more details. 

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

## How to Use

1. Download zip or click "Use this template"
2. Update `app.json`

```
 "name": "{your-project-name}",
 "slug": "{your-project-name}",
 ...
 # 👇 replace with yours project id or comment out
 "extra": {
    "eas": {
      "projectId": "{your-expo-project-id}"
    }
  },
  "updates": {
    "url": "https://u.expo.dev/{your-expo-project-id}"
  },
```

3. `npm install` or `yarn install`
4. In the terminal, `npm run start` or `yarn run start`

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/LICENSE) file for more info.
