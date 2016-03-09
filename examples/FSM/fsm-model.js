'use strict';

var FSM_MM, FSM, State, Transition;

(function() { var MM = require('./fsm-metaModel.js');
    FSM_MM = MM.FSM_MM;
    FSM = MM.FSM;
    State = MM.State;
    Transition = MM.Transition;
}).call();

var Model;

(function() {var jsmf = require('jsmf-core');
    Model = jsmf.Model;
}).call();

var s0 = State.newInstance({name: 's0'});
var s1 = State.newInstance({name: 's1'});
var s2 = State.newInstance({name: 's2'});
var s3 = State.newInstance({name: 's3'});
var s4 = State.newInstance({name: 's4'});
var s5 = State.newInstance({name: 's5'});


var t0 = Transition.newInstance({name: 't0'});
t0.target = s1;
s0.transitions = t0;

var t10 = Transition.newInstance({name: 't10', target: s2});
var t11 = Transition.newInstance({name: 't11', target: s3});
s1.transitions = [t10, t11];

var t20 = Transition.newInstance({name: 't20', target: s4});
var t21 = Transition.newInstance({name: 't21', target: s5});
s2.transitions = [t20, t21];

var t3 = Transition.newInstance({name: 't3', target: s0});
s3.transitions = t3;

var t5 = Transition.newInstance({name: 't5', target: s0});
s5.transitions = t5;

var myFSM = FSM.newInstance({
    initial: s0,
    final: s4,
    states: [s0,s1,s2,s3,s4,s5]
});

var sample = new Model('fsmSample', FSM_MM, myFSM, true);

module.exports.sample = sample;
