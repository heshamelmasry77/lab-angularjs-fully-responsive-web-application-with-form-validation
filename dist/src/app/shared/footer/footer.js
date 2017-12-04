'use strict';

require('./footer.scss');
var $ = require('jquery');
var jq = $.noConflict();

module.exports = {
  template: require('./footer.html'),
  controller: FooterController
};

/** @ngInject */
function FooterController() {
  var vm = this;
  vm.init = init;
  vm.hide = hide;
  function init() {
    vm.hide();
  }
  function hide() {
    jq('p').addClass('hidden');
    jq('.carousel[data-type="multi"] .item').each(function () {
      var next = jq(this).next();
      if (!next.length) {
        next = jq(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo(jq(this));
      for (var i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
          next = jq(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo(jq(this));
      }
    });
  }
}
//# sourceMappingURL=footer.js.map