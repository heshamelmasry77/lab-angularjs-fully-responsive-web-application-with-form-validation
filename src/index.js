const angular = require('angular');

const techsModule = require('./app/modules/home/index');
require('angular-ui-router');
require('angularjs-toaster');
require('angular-carousel');
require('angular-touch');
const routesConfig = require('./routes');

const main = require('./app/main');
const header = require('./app/shared/header/header');
const title = require('./app/shared/title/title');
const footer = require('./app/shared/footer/footer');

import 'bootstrap';

require('./index.scss');

angular
  .module('app', [techsModule, 'ui.router', 'toaster', 'angular-carousel', 'ngTouch'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
