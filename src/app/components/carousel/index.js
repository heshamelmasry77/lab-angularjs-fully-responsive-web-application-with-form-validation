const angular = require('angular');

const techs = require('./techs');

const techsModule = 'techs';

module.exports = techsModule;

angular
  .module(techsModule, [])
  .component('fountainTechs', techs);
