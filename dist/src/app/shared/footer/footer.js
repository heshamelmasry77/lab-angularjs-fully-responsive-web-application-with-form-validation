'use strict';

require('./footer.scss');
module.exports = {
  template: require('./footer.html'),
  controller: FooterController
};

/** @ngInject */
function FooterController($, $log, jquery) {
  fuck();
  function fuck() {
    jquery(document).ready(function () {
      $log.log('fuck');
    });
  }
}
//# sourceMappingURL=footer.js.map