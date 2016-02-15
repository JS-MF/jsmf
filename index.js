'use strict';

/* jsmf.core reexports */

(function() {
    var libnames = ['jsmf-core', 'jsmf-jstl', 'jsmf-magellan', 'jsmf-neo4j', 'jsmf-json', 'jsmf-check', 'jsmf-util'];
    for (var i in libnames) {
        var lib = require(libnames[i]);
        for (var k in lib) {
          module.exports[k] = lib[k];
        }
    }
}).call();
