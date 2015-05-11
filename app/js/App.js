'use strict';

var React              = require('react/addons');
var Reflux             = require('reflux');
var RouteHandler       = require('react-router').RouteHandler;

var Header             = require('./components/Header');
var Footer             = require('./components/Footer');

var App = React.createClass({

  mixins: [Reflux.ListenerMixin],

  render: function() {
    return (
      <div>

        <Header />

        <RouteHandler />
        <Footer />

      </div>
    );
  }

});

module.exports = App;