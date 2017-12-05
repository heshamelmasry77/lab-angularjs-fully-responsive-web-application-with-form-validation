require('./footer.scss');
// const $ = require('jquery');
// const jq = $.noConflict();

module.exports = {
  template: require('./footer.html'),
  controller: FooterController
};

/** @ngInject */
function FooterController() {
  const vm = this;
  vm.init = init;
  function init() {
  }
}

