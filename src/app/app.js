import angular from 'angular';
import ngRoute from 'angular-route';

import appConfig from './app-config';
import userService from './services/user-service';
import routingService from './services/routing-service';
import registrationComponent from './components/registration';
import gameComponent from './components/game';

angular
  .module('frontendApp', [
    ngRoute
  ])
  .constant('API_ROUTES', appConfig.API_ROUTES)
  .constant('ROUTES', appConfig.ROUTES)
  .service('routingService', routingService)
  .service('userService', userService)
  .component('frontendRegistration', registrationComponent)
  .component('frontendGame', gameComponent)
  .config($routeProvider => {
    const R = appConfig.ROUTES;

    $routeProvider
      .when(R.registration, {
        template: '<frontend-registration />',
      })
      .when(R.game, {
        template: '<frontend-game />',
      })
      .when(R.gameResult, {
        template: '<div>Game result</div>',
      })
      .when(R.index, {
        template: '',
        controller: routingService => routingService.redirectToNextPath()
      })
  })
  .run(() => {
    console.log('HELLO FROM ANGULAR');
  });
