<div align="center">This project is a <a href="https://reactnative.dev/">React Native</a> boilerplate that can be used to kick-start a mobile application.</div>

## Index
   - [Project Structure](#project-structure)
   - [Getting Started](#getting-started)
   - [Dependencies](#dependencies)

## <a name="project-structure"></a>Project Structure:
This template follows a very simple project structure:
- `src`: main container for all the code inside the application.
  - `assets`: assets(images, audio files ...) used by application. 
  - `components`: presentational components. 
  - `config`: configuration files. 
  - `hooks`: hook files.
  - `navigators`: react navigation navigators.
  - `screens`: contains all screens/features. 
  - `services`: application services, e.g. API clients.
  - `store`: redux actions, reducers and stores. 
  - `theme`: base style for the application.
  - `translations`: application strings.
  - `App.tsx`: main componente that start the whole application.
- `index.js`: entry point of the application as per React Native standards.

## <a name="getting-started"></a>Getting Started
1. Clone the repository
    ```sh
    git clone https://github.com/lordru/rn-project-template.git && cd rn-project-template
    ```
2. Remove git history
    ```bash
    rm -rf .git/
    git init
    git add .
    git commit -m "initial commit"
    git remote add origin <your-remote-repo>
    git push -u origin master
    ```
3. Install the dependencies
    ```bash
    npm install
    cd ios && pod install && cd ..
    ```
### Android
``` 
npx react-native run-android
```

### iOS
```
npx react-native run-ios
```

## <a name="dependencies"></a>Dependencies
- [axios](https://github.com/axios/axios) for networking
- [react-native-mmkv](https://github.com/Tencent/MMKV) as a persistence layer
- [i18next](https://www.i18next.com/) for internationalization
- [redux](https://redux.js.org/) for state management 
- [redux-toolkit](https://redux-toolkit.js.org/) to make redux easier
- [redux-persist](https://github.com/rt2zz/redux-persist) to persist the redux state
- [reactNavigation](https://reactnavigation.org/) for route handling and navigation
- [react-native-svg](https://github.com/react-native-svg/react-native-svg) for svg images support
- [react-native-netinfo](https://github.com/react-native-netinfo/react-native-netinfo) to get information about the connection(state, type, quality)
