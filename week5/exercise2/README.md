1# Introducing Node scripts

### Using dependencies programmatically

Let's create a Node script that uses `mkdirp` to create a new folder. First we'll install the super-useful
[`yargs`](http://yargs.js.org/) library to manage command line arguments, because the vanilla Node way of
managing them sucks.

```
$ npm install yargs --save
```

In `make-dir.js`:

```js
const args = require('yargs').argv._;
const mkdirp = require('mkdirp');

mkdirp(args[0]);
```

Give it a test:

```
$ node index.js another-new-folder
```

### Requiring our own modules
