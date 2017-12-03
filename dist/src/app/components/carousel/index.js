'use strict';

var angular = require('angular');
require('./home.scss');
var techs = require('./techs');

var techsModule = 'techs';

module.exports = techsModule;

angular.module(techsModule, []).component('fountainTechs', techs);
//# sourceMappingURL=index.js.map