import _ from 'lodash';

class RoutingService {

  constructor($location, userService, ROUTES) {
    this._$location = $location;
    this._userService = userService;
    this._routes = ROUTES;
  }

  getNextPath() {
    return this._userService
      .getData()
      .then(userData => {
        if (_.get(userData, 'user.l4c.virtuoso_stats.stats.archetype')) {
          return this._routes.gameResult;
        }

        if (_.get(userData, 'user')) {
          return this._routes.game;
        }
        return this._routes.registration;
      })
  }

  redirectToNextPath() {
    return this
      .getNextPath()
      .then(path => {
        this._$location.path(path);
        return path;
      });
  }
}


export default RoutingService;
