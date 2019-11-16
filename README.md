# This Webpack configuration supports:

- React
- Typescript
- Hot Module Reloading with hooks support
- Cache Busting of build files

### HOW TO RUN THIS APP

- Run `yarn start:server:dev` from the client directory

### To setup a new project with webpack and support for hooks and Hot Module Reloading

The below are already provided in this project and you can just use them right away.

- Install necessary packages for webpack and Hot Module Reloading:
  
  ```yarn add -D webpack webpack-dev-server webpack-cli clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin source-map-loader ts-loader html-loader style-loader css-loader less-loader file-loader url-loader @hot-loader/react-dom react-hot-loader```

- Install React/Typescript packages:

```
yarn add react react-dom react-router-dom redux react-redux

yarn add -D @types/react @types/react-dom @types/react-router-dom @types/redux @types/react-redux  typescript
```

- Copy the webpack.config.js in client directory

- Add react-hot-loader/babel to your .babelrc:

```// .babelrc
{
  "plugins": ["react-hot-loader/babel"]
}
```

- Mark your root component as hot-exported:

```
// App.js
import { hot } from 'react-hot-loader/root';
const App = () => <div>Hello World!</div>;
export default hot(App);
```

- Make sure react-hot-loader is required before react and react-dom:
or import 'react-hot-loader' in your main file (before React)
or prepend your webpack entry point with react-hot-loader/patch, for example:
```
// webpack.config.js
module.exports = {
  entry: ['react-hot-loader/patch', './src'],
  // ...
};
```

- If you need hooks support, use @hot-loader/react-dom

Some of the above steps for enabling Hot Module Reloading are outlined by Dan Abramov. See [here](https://github.com/gaearon/react-hot-loader) for more information
