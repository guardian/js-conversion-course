# Introducing Node scripts

## Setup

Notice that we've done some initial setup in this folder:

- We've initialised an NPM project. Have a look in `package.json` to see what dependencies we have installed. Notice
that these appear under `devDependencies`, which by convention are dependencies used in development, but will not be
used in the final production code.
- We have made an `index.js`. This registers [Babel](https://babeljs.io), a library that allows us to use modern 
ES6 module syntax.
- The config for Babel is in `.babelrc`. Don't worry too much about this
- `index.js` also requires and executes `src/index.js`, which is where we're going to build our script

Let's start by installing the dependencies specified in `package.json`:

```
$ npm install
```

Now let's try running the `index.js` script:

```
$ node index.js
```
 
## Using dependencies programmatically

Let's update our `src/index.js` script to use `mkdirp` to create a new folder. First we'll install `mkdirp` and 
the super-useful [`yargs`](http://yargs.js.org/) library to manage command line arguments, because the vanilla Node 
way of managing them sucks.

```
$ npm install mkdirp yargs --save
```

In `src/index.js`:

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

Let's refactor our application. Create a new script under `src/` called `make-dir`. Inside this script:

```js
import mkdirp from 'mkdirp';

export default function(dirName) {
    mkdirp(dirName);
}
```
Now update `src/index.js` to import our `make-dir` module:

```js
import yargs from 'yargs';
import makeDir from './make-dir';

const args = yargs.argv._;

makeDir(args[0]);
```

Notice that by prefixing the `make-dir` with `./`, we are indicating to Node that we want to import a custom module,
rather than a built-in module or a module installed in `node_modules`. The path to a custom module is always relative to
the module importing it.
