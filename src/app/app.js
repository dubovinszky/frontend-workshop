import angular from 'angular';

import appConfig from './app-config';
import userService from './services/user-service';
import registrationComponent from './components/registration'

angular
  .module('l4cApp', [])
  .constant('API_ROUTES', appConfig.API_ROUTES)
  .service('userService', userService)
  .component('l4cRegistration', registrationComponent)
  .run(() => {
    console.log('HELLO FROM ANGULAR');
  });
