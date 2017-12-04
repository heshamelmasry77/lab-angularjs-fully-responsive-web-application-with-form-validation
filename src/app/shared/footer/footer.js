require('./footer.scss');
const $ = require('jquery');
const jq = $.noConflict();

module.exports = {
  template: require('./footer.html'),
  controller: FooterController
};

/** @ngInject */
function FooterController() {
  const vm = this;
  vm.init = init;
  vm.hide = hide;
  function init() {
    vm.hide();
  }
  function hide() {
    jq('p').addClass('hidden');
    jq('.carousel[data-type="multi"] .item').each(function () {
      let next = jq(this).next();
      if (!next.length) {
        next = jq(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo(jq(this));
      for (let i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
          next = jq(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo(jq(this));
      }
    });
  }
}

