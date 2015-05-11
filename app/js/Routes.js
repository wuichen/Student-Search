'use strict';

var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var App           = require('./App');

var NotFoundPage  = require('./pages/NotFoundPage');
var StudentPage  = require('./pages/StudentPage');


module.exports = (
  <Route handler={App} path='/'>

    <DefaultRoute handler={StudentPage} />

    <Route name='Home' path='/' handler={StudentPage} />
 

    <NotFoundRoute handler={NotFoundPage} />

  </Route>
);