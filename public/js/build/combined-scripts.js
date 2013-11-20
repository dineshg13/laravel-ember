(function() {

var App = window.App = Ember.Application.create({
	  LOG_TRANSITIONS: true
});

/* Order and include as you please. */


})();

(function() {

App.Store = DS.Store.extend();
App.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

Tmp.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

App.Router.map(function () {
  
});


})();