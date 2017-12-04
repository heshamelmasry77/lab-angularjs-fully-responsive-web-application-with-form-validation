require('./form.scss');
module.exports = {
  template: require('./form.html'),
  controller: FormController
};

/** @ngInject */
function FormController($log, toaster) {
  const vm = this;
  vm.submitForm = submitForm;
  function submitForm(isValid) {
    if (isValid) {
      $log.log('');
      toaster.pop({type: 'success', body: 'Your Form is valid and you submitted it'});
    }
  }
}

