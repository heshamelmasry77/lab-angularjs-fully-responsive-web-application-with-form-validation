'use strict';

module.exports = {
  template: require('./home.html'),
  controller: HomeController
};

/** @ngInject */
function HomeController($http) {
  var vm = this;

  $http.get('app/modules/techs/techs.json').then(function (response) {
    vm.techs = response.data;
  });
}
//# sourceMappingURL=home.js.map