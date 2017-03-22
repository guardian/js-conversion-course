const args = require('yargs').argv._;
const mkdirp = require('mkdirp');

mkdirp(args[0]);
