'use strict';

module.exports = {
  template: require('./techs.html'),
  controller: TechsController
};

/** @ngInject */
function TechsController($http) {
  var vm = this;

  $http.get('app/components/carousel/techs.json').then(function (response) {
    vm.techs = response.data;
  });
}
//# sourceMappingURL=techs.js.map