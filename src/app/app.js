import angular from 'angular';
import registrationComponent from './components/registration'

angular
  .module('l4cApp', [])
  .component('l4cRegistration', registrationComponent)
  .run(() => {
    console.log('HELLO FROM ANGULAR');
  });
