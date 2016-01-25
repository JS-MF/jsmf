'use strict';

var _ = require('lodash');

var Model;
(function() {
    var jsmf = require('jsmf-core');
    Model = jsmf.Model;
}).call();

var nav = require('jsmf-magellan');
var check = require('jsmf-check');

var FSM_MM, FSM, State, Transition;
(function() { var MM = require('./fsm-metaModel.js');
    FSM_MM = MM.FSM_MM;
    FSM = MM.FSM;
    State = MM.State;
    Transition = MM.Transition;
}).call();

var initial;
(function() { var M = require('./fsm-model.js');
    initial = M.sample;
}).call();


var inverted;
(function() { var M = require('./invertFSM.js');
    inverted = M.inverted;
}).call();

var checkTransformation = new check.Checker();

checkTransformation.addRule(
    'FSM_inversion',
    [ check.all(check.onInput(function (x) {
        return nav.allInstancesFromModel(FSM, x);
      }))
    , check.any(check.onOutput(function (x) {
        return nav.allInstancesFromModel(FSM, x);
    }))
    ],
    function (x, y) {
        return x.initial[0].name === y.final[0].name
          && x.final[0].name === y.initial[0].name
          && x.states.length === y.states.length
    }
);

checkTransformation.selections.inputStates =
    check.onInput(function (x) {
        return nav.allInstancesFromModel(State, x);
    })

checkTransformation.selections.outputStates =
    check.onOutput(function (x) {
        return nav.allInstancesFromModel(State, x);
    })

checkTransformation.addRule(
    'State cardinality preservation',
    [ check.raw(new check.Reference('inputStates'))
    , check.raw(new check.Reference('outputStates'))
    ],
    function (x, y) { return x.length === y.length }
);

checkTransformation.addRule(
    'State name preservation',
    [ check.all(new check.Reference('inputStates'))
    , check.any(new check.Reference('outputStates'))
    ],
    function (x, y) { return x.name === y.name }
);

checkTransformation.addRule(
    'Transition cardinality preservation',
    [ check.raw(check.onInput(function (x) {
        return nav.allInstancesFromModel(Transition, x);
      }))
    , check.raw(check.onOutput(function (x) {
        return nav.allInstancesFromModel(Transition, x);
    }))
    ],
    function (x, y) { return x.length === y.length }
);

checkTransformation.addRule(
    'Transition are inverted',
    [ check.all(check.onInput(function (x) {
        return nav.allInstancesFromModel(Transition, x);
      }))
    , check.any(check.onOutput(function (x) {
        return nav.allInstancesFromModel(Transition, x);
      }))
    ],
    function (inputT, outputT) {
        return inputT.target[0].name == outputT.source[0].name
            && outputT.target[0].name == inputT.source[0].name;
    }
);

console.log(checkTransformation.runOnTransformation(initial, inverted));
