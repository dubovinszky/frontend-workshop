import _ from 'lodash';

export default {
  template: '<div id="gameResultContainer"></div>',
  controller: function gameResultController($window, $element, $timeout, userService) {
    userService
      .getData()
      .then(userData => {
        $timeout(() => {
          $window.LensaUI.displayVirtuosoResult({
            container: document.getElementById('gameResultContainer'),
            name: _.get(userData, 'user.name'),
            result: _.get(userData, 'user.l4c.virtuoso_stats.stats')
          });
        });
      });
  }
}
