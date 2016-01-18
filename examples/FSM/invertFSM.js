'use strict';

var _ = require('lodash');

var Model;
(function() {
    var jsmf = require('jsmf-core');
    Model = jsmf.Model;
}).call();

var TransformationModule;
(function() {
    var jstl = require('jsmf-jstl');
    TransformationModule = jstl.TransformationModule;
}).call();

var nav = require('jsmf-magellan');

var FSM_MM, FSM, State, Transition;
(function() { var MM = require('./fsm-metaModel.js');
    FSM_MM = MM.FSM_MM;
    FSM = MM.FSM;
    State = MM.State;
    Transition = MM.Transition;
}).call();

var input;
(function() { var M = require('./fsm-model.js');
    input = M.sample;
}).call();

var output = new Model('invertedSample')

var module = new TransformationModule('invertFSM', input, output);

var fsmInversion = {
    in: function(x) {return nav.allInstancesFromModel(FSM, x);},
    out: function(i) {
        var fsm = FSM.newInstance();
        var fsmInitial = {
            source: fsm,
            relationname: 'initial',
            target: i.final
        };
        var fsmFinal = {
            source: fsm,
            relationname: 'final',
            target: i.initial
        };
        var fsmStates = {
            source: fsm,
            relationname: 'states',
            target: i.states
        };
        return [fsm, fsmInitial, fsmFinal, fsmStates];
    }
};
module.addRule(fsmInversion);

var transitionInversion = {
    in: function(x) {return nav.allInstancesFromModel(Transition, x);},
    out: function(i) {
        var transition = Transition.newInstance({name: i.name});
        var transitionTarget = {
            source: transition,
            relationname: 'target',
            target: i.source
        };
        return [transition, transitionTarget];
    }
}
module.addRule(transitionInversion);

var stateInversion = {
    in: function(x) {return nav.allInstancesFromModel(State, x);},
    out: function(i, input) {
        var state = State.newInstance({name: i.name});
        var stateTransitions = {
            source: state,
            relationname: 'transitions',
            target: _.filter(
                nav.allInstancesFromModel(Transition, input),
                function(x) {return x.target[0] === i}
            )
        };
        return [state, stateTransitions];
    }
};
module.addRule(stateInversion);

module.applyAllRules();
var inspect = require('eyes').inspector({
    maxLength: 12000
});
inspect(module.outputModel);
