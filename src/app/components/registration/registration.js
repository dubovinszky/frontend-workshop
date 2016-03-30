import template from './registration.html';
import './registration.scss';

export default {
  template,
  controllerAs: 'vm',
  controller: function(userService) {
    this.userData = {};

    this.register = () => {
      userService.register(this.userData)
    };
  }
};
