'use strict';

require('./footer.scss');
// const $ = require('jquery');
// const jq = $.noConflict();

module.exports = {
  template: require('./footer.html'),
  controller: FooterController
};

/** @ngInject */
function FooterController() {
  var vm = this;
  vm.init = init;
  function init() {}
}
//# sourceMappingURL=footer.js.map