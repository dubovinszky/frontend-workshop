class UserService {
  constructor($http, $q, API_ROUTES) {
    this._$http = $http;
    this._$q = $q;
    this._apiRoutes = API_ROUTES;
    this._userData = null;
    this._userPromise = null;
  }

  register(userData) {
    return this._$http
      .post(this._apiRoutes.register, userData)
      .then(response => {
        if (response.data.success) {
          this._clearData();
        }
      });
  }

  _clearData() {
    this._userData = null;
    this._userPromise = null;
  }

  calculateGameResult(gameId) {
  return this
    ._$http
    .post(this._apiRoutes.calculateGameResult, {game_id: gameId})
    .then(response => {
      this._clearData();
      return response;
    });
}

  getData() {
    if (this._userData) {
      return this._$q.when(this._userData);
    }

    if (!this._userPromise) {
      this._userPromise = this._$http.get(this._apiRoutes.whoami)
        .then(response => {
          const data = response.data;
          if (data.success) {
            this._userData = data;
            this._userPromise = null;
          }
          return data;
        });
    }

    return this._userPromise;
  }
}

export default UserService;
