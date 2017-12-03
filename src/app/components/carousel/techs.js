module.exports = {
  template: require('./techs.html'),
  controller: TechsController
};

/** @ngInject */
function TechsController($http) {
  let vm = this;

  $http
    .get('app/components/carousel/techs.json')
    .then(function (response) {
      vm.techs = response.data;
    });
}
