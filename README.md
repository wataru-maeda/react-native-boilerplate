<img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/master/readme.assets/banner.svg' width='400'>

<img src='https://github.com/WataruMaeda/react-native-boilerplate/blob/master/readme.assets/demo.gif' width='32%'>

- [Expo link](https://expo.io/@wataru/react-native-boilerplate)

## About

We spend a large amount of time to setup a project; changing file structure, installing libraries, create reusable components and so on. The purpose of using the project is to minimize the redundant effort to setup a project from scratch. In the boilerplate, it contains only commonly-used libraries and the all setup done for you.

## What's included

#### Navigation

At the default, you can see 3 type of navigation; stack, tab and drawer. Here in the [code](https://github.com/WataruMaeda/react-native-boilerplate/tree/master/src/routes/navigator), files are separated by the navigation types. If you don't need a drawer navigation for example, you can the remove drawer file and replace the import status [here](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/routes/navigation/Navigation.js#L2) to tab or stack navigator.

#### Authentication

If your app requires authorization, you need to implement login, signup function. After the user login or logout, the navigation flow should be different. In this case, the route should be switched by the login status. In the [route](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/routes/Routes.js#L14-L19), you can set the different navigation changed by login status.

#### Redux

Redux can contain global state of the app. This is very useful but on the other hand, it takes time to setup if you are not familiar with it. In the boilerplate, you see [module file](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/modules/app.module.js) which contains actions, reducer and store in a file. To connect with actions and state from component, you need to call [connector](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/utils/connector.js). You can use actions and state from props. Here is an [example](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/routes/Routes.js#L10-L15). To combine reducer, first you can add another module file then import in connector like this [code](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/utils/connector.js#L41-L42). Lastly import module in [store](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/src/utils/store.js#L21) as well.

#### Assets

Images, icons and fonts are controlled under [style](https://github.com/WataruMaeda/react-native-boilerplate/tree/master/src/theme). If you add new assets, you need to import the new assets in each files to access the assets from theme. Also, assets preloading is implemented as well. You can also use svg file in the boilerplate. All the assets related setup are done for you.

### Absolute path

If your project structure become complicated and has a lot of nested folders, you will have problem with relative paths. In the boilerplate, you can use absolute paths. You can write simple import statement i.e 'components/Button'. No more ../../../components/Button. The configuration is written in `babel.config.js`.

### Code formatting, fixing and testing on pre commit

It's very important to keep code clean to maintain readability and productivity. In the boilerplate, Eslint, Prettier and Jest configuration are done. It's continuously checking and format your code while you coding (Please enable "Format on Save" option if you prefer to format code after save change). After you submit changes, pre commit script will run to handle checking and formatting your code, run test. If the 3 steps are passed, you will be able to push the change.

## Libraries in the boilerplate

- expo
- react-navigation
- react-redux
- redux
- redux-logger
- redux-promise-middleware
- redux-thunk
- moment
- axios
- react-native-vector-icons
- react-native-svg

## How to Use

1. Download zip or click "Use this template"
2. Update `app.json`

```
 "name": "your-app-name",
 "slug": "your-app-name",
```

3. `yarn install` or `npm install`
4. If you haven't setup expo, please follow the [instruction](https://expo.io/learn) to complete setup
5. In terminal, `expo start`

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/WataruMaeda/react-native-boilerplate/blob/master/LICENSE) file for more info.
