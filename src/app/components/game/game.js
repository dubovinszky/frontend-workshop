import template from './game.html';

export default {
  template,
  controllerAs: 'vm',
  controller: function gameController($window, $timeout, userService, routingService) {
      this.templateName = 'instructions';

      this.startGame = () => {
        this.templateName = 'game';

        userService
          .getData()
          .then(userData => {
            $timeout(() => {
              const gameId = userData.user.pending_game_id;
              $window.startVirtuoso({
                container: document.getElementById('gameContainer'),
                gameId,
                registerEventUrl: '/game-backend/',
                onGameStart() {
                  console.log('Game start');
                },
                onGameEnd() {
                  userService
                    .calculateGameResult(gameId)
                    .then(() => routingService.redirectToNextPath());
                },
              })
            })
        });
      }
  }
};
