'use strict';

/* jsmf.core reexports */

const libs =
  [ require('jsmf-core')
  , require('jsmf-jstl')
  , require('jsmf-magellan')
  , require('jsmf-json')
  , require('jsmf-check')
  ];

for (let i in libs) {
    const lib = libs[i]
    for (let k in lib) {
      module.exports[k] = lib[k]
    }
}
