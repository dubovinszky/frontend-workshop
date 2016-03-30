import template from './registration.html';
import './registration.scss';

export default {
  template,
  controllerAs: 'vm',
  controller: function(userService, $location, ROUTES) {
    this.userData = {};

    this.register = () => {
      userService
        .register(this.userData)
        .then(() => $location.path(ROUTES.game));
    };
  }
};
