# Introducing Webpack

The ES6 module syntax is a useful way to import external dependencies into a module, guaranteeing that all our scripts
are loaded in the correct order. However it is not natively supported in browsers. To get around this, there are a 
number of build tools that allow us to **bundle** our JavaScript modules so that they can be consumed within a browser 
environment:

- [Browserify](http://browserify.org/)
- [Webpack](https://webpack.js.org/)
- [Rollup](https://rollupjs.org/)

We're going to look at Webpack.

## Setup

Take a look in `package.json` to familiarise yourself with this project's dependencies. Now install them:

```bash
$ npm install
```

Let's create a super-simple JavaScript file:

```js
// src/index.js
document.querySelector('.container').innerHTML = '<h1>Hello Webpack!</h1>'
```

And a HTML file:

```html
// index.html

<!doctype html>
<html>
<head>
  <title>Hello Webpack</title>
</head>
<body>
<div class="container"></div>
<script src="dist/bundle.js"></script>
</body>
</html>

```

Next we're going to build the simplest possible Webpack config. Create a file called `webpack.config.js` under the
`exercise3` folder:

```js
// webpack.config.js

const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  devtool: 'source-map',
};

```

**Note:** we are importing Node's built-in `path` module and exporting the config object using CommonJS module syntax.

Let's have a look at what is happening in this file:

- `entry`: this contains the entry points for the app. Each page may only contain one entry point
- `output.filename`: the resulting file that Webpack will produce
- `output.path`: absolute path to the output file
- `module.rules`: these rules allow us to use special loaders to process our source files before they get bundled. In
this example, we are using the `babel-loader` to transpile our hipster ES6 source code back into ES5 so it can be used
across a wider set of browsers
- `devtool`: Generates sourcemaps to make in-browser debugging easier

Finally we'll add some scripts to our `package.json`:

```json
"scripts": {
  "build": "webpack",
  "start": "http-server ."
}
```

Now run:

```bash
$ npm run build
```

This will kick off Webpack and build a browser bundle under `dist/bundle.js`. Take a look inside and enjoy the tasty
Webpack bootstrapping.

Now we can start up a dev server:

```bash
$ npm start
```

Browse to [`http://localhost:8080`](http://localhost:8080). You should see a page that screams "Hello Webpack!"