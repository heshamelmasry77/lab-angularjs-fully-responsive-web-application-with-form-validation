'use strict';

var angular = require('angular');

var carousel = require('./components/carousel/carousel');
var card = require('./components/card/card');
var album = require('./components/album/album');
var home = require('./home');

var homeModule = 'home';

module.exports = homeModule;

angular.module(homeModule, []).component('fountainCard', card).component('fountainCarousel', carousel).component('fountainAlbum', album).component('fountainHome', home);
//# sourceMappingURL=index.js.map