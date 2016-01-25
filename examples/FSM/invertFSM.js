'use strict';

var _ = require('lodash');

var Model;
(function() {
    var jsmf = require('jsmf-core');
    Model = jsmf.Model;
}).call();

var Mapping, Transformation;
(function() {
    var jstl = require('jsmf-jstl');
    Transformation = jstl.Transformation;
    Mapping = jstl.Mapping;
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


var trans = new Transformation();

var fsmInversion = {
    in: function(x) {return nav.allInstancesFromModel(FSM, x);},
    out: function(i) {
        var fsm = FSM.newInstance();
        this.assign(fsm, 'initial', i.final);
        this.assign(fsm, 'final', i.initial);
        this.assign(fsm, 'states', i.states);
        return [fsm];
    }
};
trans.addRule(fsmInversion);

var transitionInversion = {
    in: function(x) {return nav.allInstancesFromModel(Transition, x);},
    out: function(i) {
        var transition = Transition.newInstance({name: i.name});
        this.assign(transition, 'target', i.source);
        return [transition];
    }
}
trans.addRule(transitionInversion);

var stateInversion = {
    in: function(x) {return nav.allInstancesFromModel(State, x);},
    out: function(i, input) {
        var state = State.newInstance({name: i.name});
        this.assign(state, 'transitions', this.helpers.opposedTarget.valuesFor(i));
        return [state];
    }
};
trans.addRule(stateInversion);

var opposedTargetRelation = {
    name: 'opposedTarget',
    map: function(x) {
      var result = new Mapping();
      _.forEach(
          nav.allInstancesFromModel(Transition, x),
          function (t) {
              result.map(t.target[0], t);
          });
      return result;
    }
}
trans.addHelper(opposedTargetRelation);

var output = new Model('invertedSample')
trans.apply(input, output);
var inspect = require('eyes').inspector({
    maxLength: 12000
});
inspect(output);

module.exports.inverted = output;
