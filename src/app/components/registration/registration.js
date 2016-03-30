import template from './registration.html';
import './registration.scss';

export default {
  template,
  controllerAs: 'vm',
  controller: function(userService, routingService, ROUTES) {
    this.userData = {};

    this.register = () => {
      userService
        .register(this.userData)
        .then(() => routingService.redirectToNextPath());
    };
  }
};
