class UserService {
  constructor($http, API_ROUTES) {
    this._$http = $http;
    this._apiRoutes = API_ROUTES;
  }

  register(userData) {
    return this._$http.post(this._apiRoutes.register, userData);
  }
}

export default UserService;
