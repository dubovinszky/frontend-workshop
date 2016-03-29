import template from './registration.html';
import './registration.scss';

export default {
  template,
  controllerAs: 'vm',
  controller: function($http) {
    this.userData = {};

    this.register = () => {
      $http
        .post('/auth/register', this.userData)
        .then(r => console.log('Error'));
    };
  }
};
