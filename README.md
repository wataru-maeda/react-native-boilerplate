
<img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/update-readme/readme.assets/banner.svg' width='400'> 

<img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/master/readme.assets/1.png' width='31%'> <img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/master/readme.assets/2.png' width='31%'> <img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/master/readme.assets/3.png' width='31%'> 

- [Expo link](https://expo.io/@wataru/react-native-boilerplate)

## About

We spend a large amount of time to setup a project; changing file structure, installing libraries, create resusable components and so on. The purpose of using the project is to minimize the redundant effort to setup a project from scratch. In the boilerplate, it contains only commonly-used libraries and the all setup done for you. 

## What's included

#### Navigation

At the default, you can see 3 type of navigations; stack, tab and drawer. Here in the [code](https://github.com/WataruMaeda/react-native-boilerplate/tree/master/src/routes/navigator), files are separated by the navigation types. If you don't need a drawer navigation for example, you can remove drawer file and replace the import status [here](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/routes/routes.js#L5) to tab.

#### Authentication

- Redux
- React navigation (StackNavigation, TabNavigation, DrawerNavigation)
- Assets preloading (Images and fonts)
- FontAwsome

## Libraries in the boilerplate

- expo
- react-navigation
- react-redux
- redux
- redux-logger
- redux-promise-middleware
- redux-thunk

## How to Use

1. Download zip
2. Update `app.json`
```
 "name": "your-app-name",
 "slug": "your-app-name",
```
3. `yarn install` or `npm install`
4. Open the project in `expo` -> run

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/LICENSE) file for more info.
