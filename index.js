'use strict';

/* jsmf.core reexports */

/** See jsmf-core documentation */
var Model, Class, Enum;
(function() {
    var core = require('jsmf-core');
    Class = core.Class;
    Model = core.Model;
    Enum = core.Enum;
}).call();

/* jsmf-jstl reexcports */

/** See jsmf-jstl documentation */
var TransformationModule;

(function() {
    var jstl = require('jsmf-jstl');
    TransformationModule = jstl.TransformationModule;
}).call()

/* jsmf-magellan reexports */

/** See jsmf-magellan documentation */
var crawl, follow, allInstancesFromModel, filterModelElements, DFS_All, DFS_First, BFS_All, BFS_First, hasClass, referenceMap;

(function() {
    var mag = require('jsmf-magellan');
    crawl = mag.crawl;
    follow = mag.follow;
    allInstancesFromModel = mag.allInstancesFromModel;
    filterModelElements = mag.filterModelElements;
    DFS_All = mag.DFS_All;
    DFS_First = mag.DFS_First;
    BFS_All = mag.BFS_All;
    BFS_First = mag.BFS_First;
    hasClass = mag.hasClass;
    referenceMap = mag.referenceMap;
}).call()

/* jsmf-neo4j reexports */

/** See jsmf-neo4j documentation */
var persist, resolve, deleteElement, saveToNeo4j, loadFromNeo4j, init;

(function() {
    var neo4j = require('jsmf-neo4j');
    persist = neo4j.persist;
    resolve = neo4j.resolve;
    deleteElement = neo4j.deleteElement;
    saveToNeo4j = neo4j.saveModel;
    loadFromNeo4j = neo4j.loadModel;
    init = neo4j.init;
}).call()

/** See jsmf-json documentation */
var saveToJSON, loadFromJSON, init;

(function() {
    var json = require('jsmf-json');
    saveToJSON = json.saveModel;
    loadFromJSON = json.readModel;
    init = init;
}).call()

/** See jsmf-check documentation */
var Checker, Rule, all, any, raw, onInput, onOutput, Reference;

(function() {
    var check = require('jsmf-check');
    Checker = check.Checker;
    Rule = check.Rule;
    all = check.all;
    any = check.any;
    onInput = check.onInput;
    onOutput = check.onOutput;
    Reference = check.Reference;
}).call()

/** See jsmf-util documentation */
var demote, equals, exportD3JS;

(function() {
    var util = require('jsmf-util');
    demote = util.demote;
    equals = util.equals;
    exportD3JS = util.exportD3JS;
}).call()

module.exports = {

    Class: Class,
    Model: Model,
    Enum: Enum,

    TransformationModule: TransformationModule,

    crawl: crawl,
    follow: follow,
    allInstancesFromModel: allInstancesFromModel,
    filterModelElements: filterModelElements,
    DFS_All: DFS_All,
    DFS_First: DFS_First,
    BFS_All: BFS_All,
    BFS_First: BFS_First,
    hasClass: hasClass,
    referenceMap: referenceMap,

    persist: persist,
    resolve: resolve,
    deleteElement: deleteElement,
    saveToNeo4j: saveToNeo4j,
    loadFromNeo4j: loadFromNeo4j,
    init: init,

    saveToJSON: saveToJSON,
    loadFromJSON: loadFromJSON,

    Checker: Checker,
    Rule: Rule,
    all: all,
    any: any,
    onInput: onInput,
    onOutput: onOutput,
    Reference: Reference,

    demote : demote,
    equals : equals,
    exportD3JS : exportD3JS
}

