'use strict';

/* jsmf.core reexports */

var libs =
  [ require('jsmf-core')
  , require('jsmf-jstl')
  , require('jsmf-magellan')
  , require('jsmf-neo4j')
  , require('jsmf-json')
  , require('jsmf-check')
  , require('jsmf-util')
  ];

(function() {
    for (var i in libs) {
        var lib = libs[i];
        for (var k in lib) {
          module.exports[k] = lib[k];
        }
    }
}).call();
