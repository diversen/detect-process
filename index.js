var isNode = require('detect-node');
var isPhantom = require('is-phantom');
var isElectron = require('is-electron');


var getName = function() {
    if (isElectron()) {
        return 'electron';
    }

    if (isPhantom()) {
	return 'phantom';
    }
    if (isNode) {
        return 'nodejs';
    }
    
    return 'browser';
};


module.exports = {
  getName: getName
};

