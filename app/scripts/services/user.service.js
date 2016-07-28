'use strict';

/**
 * @ngdoc service
 * @name application.userService
 * @description
 * # userService
 * Factory in the application.
 */
app.factory('UserService', ['CONFIG', '$http', '$log', '$window', '$rootScope', function(CONFIG, $http, $log, $window, $rootScope) {

    var urlBase = CONFIG.API_URL + 'authentication';
    var dataFactory = {};

    dataFactory.token = function(token) {
        token = typeof token !== 'undefined' ? token : false;

        if(token) {
            $window.localStorage.token = token;
            return token;
        } else if(token === null) {
            delete $window.localStorage.token;
        } else {
            return $window.localStorage.token;
        }
    };

    dataFactory.login = function (user) {
        var req = $http.post(urlBase + '/login', user);
        req.success(function(response){
            dataFactory.token(response.data.token);
        });
        return req;
    };

    dataFactory.logout = function () {
          dataFactory.token(null);
    };

    dataFactory.register = function (user) {
        return $http.post(urlBase + '/register', user);
    };

    dataFactory.view = function () {
        return $http.get(urlBase + '/me');
    };

    return dataFactory;

}]);
