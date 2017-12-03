require('./home.scss');

module.exports = {
  template: require('./home.html'),
  controller: HomeController
};

/** @ngInject */
function HomeController() {
}
