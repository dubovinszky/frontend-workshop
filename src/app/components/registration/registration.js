import template from './registration.html';
import './registration.scss';

export default {
  template,
  controllerAs: 'vm',
  controller: function() {
    this.userData = {};

    this.register = () => {
      console.log(this.userData);
    };
  }
};
