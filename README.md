
<img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/update-readme/readme.assets/banner.svg' width='400'> 

<img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/master/readme.assets/1.png' width='31%'> <img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/master/readme.assets/2.png' width='31%'> <img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/master/readme.assets/3.png' width='31%'> 

- [Expo link](https://expo.io/@wataru/react-native-boilerplate)

## About

We spend a large amount of time to setup a project; changing file structure, installing libraries, create resusable components and so on. The purpose of using the project is to minimize the redundant effort to setup a project from scratch. In the boilerplate, it contains only commonly-used libraries and the all setup done for you. 

## What's included

#### Navigation

At the default, you can see 3 type of navigations; stack, tab and drawer. Here in the [code](https://github.com/WataruMaeda/react-native-boilerplate/tree/master/src/routes/navigator), files are separated by the navigation types. If you don't need a drawer navigation for example, you can the remove drawer file and replace the import status [here](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/routes/routes.js#L5) to tab or stack navigator.

#### Authentication

If your app requires authorization, you need to implement login, signup function. After the user login or logout, the navigation flow should be different. In this case, the route should be swtiched by the login status. In the [route](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/routes/routes.js#L19-L23), you can set the different navigation changed by login status.

#### Redux

Redux can contain global state of the app. This is very useful but on the otherhand, it takes time to setup if you are not familiar with it. In the boilerplate, you see [module file](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/modules/app.module.js) which contains actions, reducer and store in a file. To connect with actions and state from component, you need to call [connector](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/utils/connector.js). You can use actions and state from props. Here is an [example](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/routes/routes.js#L27-L40). To combine reducer, first you can add another module file then import in connector like this [code](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/utils/connector.js#L41-L42). Lastly import module in [store](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/utils/store.js#L21) as well.

#### Assets

Images, icons and fonts are controled under [style](https://github.com/WataruMaeda/react-native-boilerplate/tree/master/src/styles). If you add new assets, you need to import the new assets in each files to access the assets from styles. Also, assets preloading is implemented as well.

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
