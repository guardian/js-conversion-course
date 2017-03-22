# Introducing Node scripts

Notice that we've done some initial setup in this folder:

- We've initialised an NPM project. Have a look in `package.json` to see what dependencies we have installed
- We have made an `index.js`. This registers [Babel](https://babeljs.io), a library that allows us to use modern 
ES6 module syntax.
- The config for Babel is in `.babelrc`. Don't worry too much about this
- `index.js` also requires and executes `make-dir.js`, which is where we're going to build our script

## Using dependencies programmatically

Let's start by installing the dependencies specified in `package.json`:

```
$ npm install
```

Now let's try running the `index.js` script:

```
$ node index.js
```
 
By convention, most entry point scripts are called `index.js`.

Let's create update our `make-dir.js` script to use `mkdirp` to create a new folder. First we'll install `mkdirp` and 
the super-useful [`yargs`](http://yargs.js.org/) library to manage command line arguments, because the vanilla Node 
way of managing them sucks.

```
$ npm install mkdirp yargs --save
```

In `make-dir.js`:

```js
import yargs from 'yargs';
import mkdirp from 'mkdirp';

const args = yargs.argv._;

mkdirp(args[0]);
```

Give it a test:

```
$ node index.js another-new-folder
```

## Requiring our own modules

