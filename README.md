# This Webpack configuration supports:

- React
- Typescript
- Redux
- less
- less module
- Hot Module Reloading with hooks support
- Cache Busting of build files
- audio files loading (mp3 and wav)

### HOW TO RUN THIS APP

1. Change diractory to client: `cd /client`
2. Run `yarn start:server:dev` 
   
   ***You can modify the configuration to suit you need. Thee below shows more information how this is done***


## To setup a new project with webpack and support for hooks and Hot Module Reloading

The below are already provided in this project and you can just use them right away.

1. Install necessary packages for webpack and Hot Module Reloading:
  
  ```
  yarn add -D webpack webpack-dev-server webpack-cli clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin source-map-loader ts-loader html-loader style-loader css-loader less-loader file-loader url-loader @hot-loader/react-dom react-hot-loader
  ```

2. Install React/Typescript packages

```
yarn add react react-dom react-router-dom redux react-redux
```

```
yarn add -D @types/react @types/react-dom @types/react-router-dom @types/redux @types/react-redux  typescript
```

3. Copy the webpack.config.js in client directory

4. Add react-hot-loader/babel to your .babelrc:

```// .babelrc
{
  "plugins": ["react-hot-loader/babel"]
}
```

5. Mark your root component as hot-exported:

```
// App.js
import { hot } from 'react-hot-loader/root';
const App = () => <div>My hot exported top component!</div>;
export default hot(App);
```

6. Make sure react-hot-loader is required before react and react-dom:
or import 'react-hot-loader' in your main file (before React)
or prepend your webpack entry point with react-hot-loader/patch, for example:

```
// webpack.config.js
module.exports = {
  entry: ['react-hot-loader/patch', './src'],
  // ...
};
```

7. If you want hooks support, use @hot-loader/react-dom

*Some of the above steps for enabling Hot Module Reloading are outlined by Dan Abramov [here](https://github.com/gaearon/react-hot-loader) for more information*
