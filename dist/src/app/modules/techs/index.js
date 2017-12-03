'use strict';

var angular = require('angular');

var carousel = require('./components/carousel');
var home = require('./home');

var homeModule = 'home';

module.exports = homeModule;

angular.module(homeModule, []).component('fountainCarousel', carousel).component('fountainTechs', home);
//# sourceMappingURL=index.js.map