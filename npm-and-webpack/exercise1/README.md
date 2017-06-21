# About NPM
[NPM](https://www.npmjs.org) can refer to both:
- an online repository of open-source JS projects (somewhat like Maven Central)
- a command line package management tool, bundled with Node, for interacting with said repository (a little bit like Maven or SBT)


# Exercise 1 - Introducing NPM
The following command allows you to use NPM to manage dependencies:

```
$ npm init
```

Run it in this directory. It creates a `package.json` file which defines
some metadata for your project.

You can install third party libraries from npm using the `npm install` command:

```
$ npm install mkdirp --save
```

This will save the `mkdirp` library to the `dependencies` section of your `package.json`.
It will install the library and all of its dependencies in the `node_modules` directory.

If you delete `node_modules`, you can recreate it again by running:

```
$ npm install
```

You can now run the `mkdirp` CLI from the command line:

```
$ ./node_modules/.bin/mkdirp hello
```

Very useful, I'm sure you'll agree.

You can add this to the `scripts` section of your `package.json`:

```
"scripts": {
    "make-dir": "mkdirp"
}
```

This allows you to run scripts in a friendlier way:

```
$ npm run make-dir my-new-folder
```

If you're curious about NPM and want to learn more, check out the [How to 
NPM](https://github.com/workshopper/how-to-npm) workshop.
