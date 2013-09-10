/**
@module simple-auth
*/

/**
  @class Session
  @namespace SimpleAuth
  @extends Ember.Object
*/
SimpleAuth.Session = Ember.Object.extend({
  init: function() {
    this._super();
    this.set('authToken', sessionStorage.authToken);
  },
  authTokenObserver: Ember.observer(function() {
    sessionStorage.authToken = this.get('authToken');
  }, 'authToken')
});
