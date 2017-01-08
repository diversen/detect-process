var isNode = require('detect-node');
var isDefined = require('is-defined');

var isElectron = function () {

    if (
        eval(isDefined('window')) && 
        eval(isDefined('window.process')) && 
        eval(isDefined('window.process.type')) 
        ) {
            return true;
    } 

    return false;

}

var getName = function() {
    if (isNode) {
        if (isElectron()) {
            return 'electron';
        }
        return 'nodejs';
    }

    return 'browser';
};


module.exports = {
  getName: getName
};

