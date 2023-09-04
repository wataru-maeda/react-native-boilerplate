<img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/doc/readme/__DELELE_ME__/banner.png' width='500'>

<img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/demo.gif' width='32%'>

## About

We spend a large amount of time to setup a project; changing file structure, installing libraries, creating reusable components, and so on. The purpose of using the project is to minimize the redundant effort to setup a project from scratch. In the boilerplate, it contains only commonly-used libraries and the all setup is done for you.

## Environment

- Node: 16.x
- expo-cli: 6.3.10

## What's included

#### Navigation

At default, you can see 3 types of navigation; stack, tab, and drawer. Here in the [code](https://github.com/wataru-maeda/react-native-boilerplate/tree/main/src/navigator), files are separated by the navigation types. If you don't need drawer navigation for example, you can the remove drawer file and replace the import status [here](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/navigator/Navigator.tsx#L8) to tab or stack navigator.

#### Authentication

If your app requires authorization, you need to implement login, signup function. After the user login or logout, the navigation flow should be different. In this case, the route should be switched by the login status. In the [navigator](https://github.com/wataru-maeda/react-native-boilerplate/blob/doc/readme/src/navigator/Navigator.tsx#L15), you can set the different navigation changed by login status.

#### Redux

We are using [Redux Toolkit](https://redux-toolkit.js.org/) to simplify the redux setup and minimize boilerplates. 
Redux can contain the global state of the app. This is very useful but on the other hand, it takes time to setup if you are not familiar with it. In the boilerplate, you see [module file](https://github.com/wataru-maeda/react-native-boilerplate/blob/doc/readme/src/modules/app.module.ts) which contains actions and reducers in a file. Please follow the [quick start tutorials](https://redux-toolkit.js.org/tutorials/quick-start) to see how store is setup; and how to use Redux state and actions in React Components.

#### Assets

Images, icons and fonts are controlled under [theme](https://github.com/wataru-maeda/react-native-boilerplate/tree/doc/readme/src/theme). If you add new assets, you need to import the new assets in each file to access the assets from the theme. Also, assets preloading is implemented as well. You can also use svg file in the boilerplate. All the assets are ready to use by importing the theme.

#### Absolute path

If your project structure becomes complicated and has a lot of nested folders, you will have problems with relative paths. In the boilerplate, you can use absolute paths. You write a simple import statement i.e. 'components/Button'. No more ../../../components/Button. The configuration is written in [babel.config.js](https://github.com/wataru-maeda/react-native-boilerplate/blob/doc/readme/babel.config.js) and [tsconfig.json](https://github.com/wataru-maeda/react-native-boilerplate/blob/doc/readme/tsconfig.json).

#### Code formatting, fixing and testing on pre-commit

It's very important to keep code clean to maintain readability and productivity. In the boilerplate, Eslint, Prettier and Jest configurations are done. It's continuously checking and formatting your code while you coding (Please enable "Format on Save" option if you prefer to format code after saving change). After you submit changes, pre-commit script will run to handle checking and formatting your code, run test. If the 3 steps are passed, you will be able to push the change.

#### Environment Variables

You may want to switch environments based on the development stage. There are 3 steps to setup a new environment. 
1. Run expo with `APP_ENV=yourenv` in [scripts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/package.json#L9)
2. Dynamically change environment variables based on `process.env.APP_ENV` in [app.config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/app.config.ts#L12)
3. Populate the variables in [config.ts](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/src/utils/config.ts#L5)

If you'd like to know more about dynamic configuration, please check the [page](https://docs.expo.dev/workflow/configuration/#dynamic-configuration).

#### Automated-deployment with github action

Once you complete your implementation, you may need to publish your package to share to the QA team. The boilerplate already setup automated deployment with [expo-github-action](https://github.com/expo/expo-github-action). Once you push changes to the **main** branch, github action handle deployment; publish the package to your expo account. You can check the deployment configuration [here](https://github.com/wataru-maeda/react-native-boilerplate/blob/doc/readme/.github/workflows/test.yml). 

To connect to your expo account, Read the [readme page](https://github.com/expo/expo-github-action#configuration-options) for instructions. You'll need to generate a token. Then setup token in your github repo Settings > Secrets > Actions. Add action secret named "EXPO_TOKEN". That's it!

## Libraries

- [expo v48](https://docs.expo.dev/versions/v48.0.0)
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
 "name": "your-app-name",
 "slug": "your-app-name",
```

3. `yarn install` or `npm install`
4. If you haven't setup expo, please follow the [instruction](https://expo.io/learn) to complete setup
5. In the terminal, `npm run start` or `yarn run start`

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/wataru-maeda/react-native-boilerplate/blob/main/LICENSE) file for more info.
