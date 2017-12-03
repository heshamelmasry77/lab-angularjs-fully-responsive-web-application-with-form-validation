const angular = require('angular');

const carousel = require('./components/carousel/carousel');
const card = require('./components/card/card');
const album = require('./components/album/album');
const home = require('./home');

const homeModule = 'home';

module.exports = homeModule;

angular
  .module(homeModule, [])
  .component('fountainCard', card)
  .component('fountainCarousel', carousel)
  .component('fountainAlbum', album)
  .component('fountainHome', home);
