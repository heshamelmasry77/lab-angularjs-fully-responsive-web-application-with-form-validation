const angular = require('angular');

const form = require('./components/form/form');
const carousel = require('./components/carousel/carousel');
const card = require('./components/card/card');
const album = require('./components/album/album');
const home = require('./home');

const homeModule = 'home';

module.exports = homeModule;

angular
  .module(homeModule, [])
  .component('fountainForm', form)
  .component('fountainCard', card)
  .component('fountainCarousel', carousel)
  .component('fountainAlbum', album)
  .component('fountainHome', home);
