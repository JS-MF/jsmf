# JavaScript Modelling Framework (JSMF)

## Install

The easiest way to install `jsmf` is to use npm. For stability purpose, we recommend you to install the last stable (or almost) release, (tag 0.5.0):

~~~~shell
$ npm install git+ssh://git@git.list.lu:jsmf/jsmf.git#0.5.0
~~~~

## Description

JSMF is a set of tool for model management in javascript, which can either be
embedded in a browser or run in nodejs. The library is split in diverse
components that can be imported separately to fit your needs.

The library is composed of the following components:

- [core](https://git.list.lu/jsmf/jsmf-core): The core library, to define model and model instances.
- [jstl](https://git.list.lu/jsmf/jsmf-jstl): A library for iJSMF model transformations.
- [magellan](https://git.list.lu/jsmf/jsmf-magellan): A library for model navigation and model queries.
- [neo4j](https://git.list.lu/jsmf/jsmf-neo4j): A NEO4J backend for JSMF models.
- [json](https://git.list.lu/jsmf/jsmf-json): Serialization of jsmf models as JSON.
- [util](https://git.list.lu/jsmf/jsmf-util): Miscellanous functions for jsmf models.

Aside these libraries, the examples folders contains some example about the
global usage of the libraries.

## Other libraries

Besides the battery includes `jsmf` library, one can also use the
[yUML](https://git.list.lu/jsmf/jsmf-yuml) component, to obtain a yUML diagram of a
JSMF metamodel.

## Stability warning

JSMF is under active development, the API is not stable at the moment and can
change signifantly in the future releases.

## Authors and Copyright

JSMF is developped by the
[Luxembourg Institute of Science and Technology](http://list.lu/) (LIST).
You can see the [license file](LICENSE) for more information about the
license and the [contributors](Contributors) file for more information about
the authors and contributors to the project.
