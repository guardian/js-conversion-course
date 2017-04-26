var storagePrefix = 'gu.prefs.';
var defaultOptions = {
    type: 'local'
};

function switchOn(name, options) {
    options = options || {};
    storage[options.type || defaultOptions.type].set(storagePrefix + 'switch.' + name, true);
}
