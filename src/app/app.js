import angular from 'angular';
import ngRoute from 'angular-route';

import appConfig from './app-config';
import userService from './services/user-service';
import registrationComponent from './components/registration';

angular
  .module('l4cApp', [
    ngRoute
  ])
  .constant('API_ROUTES', appConfig.API_ROUTES)
  .constant('ROUTES', appConfig.ROUTES)
  .service('userService', userService)
  .component('l4cRegistration', registrationComponent)
  .config($routeProvider => {
    const R = appConfig.ROUTES;

    $routeProvider
      .when(R.registration, {
        template: '<l4c-registration />'
      })
      .when(R.game, {
        template: '<div>Game</div>'
      })
  })
  .run(() => {
    console.log('HELLO FROM ANGULAR');
  });
