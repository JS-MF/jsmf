'use strict';

var Class;
var Model;

(function() {var JSMF = require('jsmf-core');
    Model = JSMF.Model;
    Class = JSMF.Class;
}).call();

var FSM_MM = new Model('State');

var State = Class.newInstance('State', [], {name: String});
State.setAttribute('name', String);

var Transition = Class.newInstance('Transition', [], {name: String}, {target: {type: State, cardinality: 1}});
State.setReference('transitions', Transition, -1, 'source');

var FSM = Class.newInstance('FSM', [], {}, {
    initial: {type: State, cardinality: 1},
    final: {type: State, cardinality: 1},
    states: {type: State, cardinality: -1}
});

FSM_MM.setModellingElements([FSM, State, Transition]);

module.exports = {
    FSM_MM: FSM_MM,
    FSM: FSM,
    State: State,
    Transition: Transition
}
