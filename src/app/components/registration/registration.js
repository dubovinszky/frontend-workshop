var template = require('./registration.html');

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
