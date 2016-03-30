import template from './game.html';

export default {
  template,
  controllerAs: 'vm',
  controller: function gameController($window, $timeout, userService) {
      this.templateName = 'instructions';

      this.startGame = () => {
        this.templateName = 'game';

        userService
          .getData()
          .then(userData => {
            $timeout(() => {
              $window.startVirtuoso({
                container: document.getElementById('gameContainer'),
                gameId: userData.user.pending_game_id,
                registerEventUrl: '/game-backend/',
              })
            })
        });
      }
  }
};
