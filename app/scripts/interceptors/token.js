'use strict';

app.factory('TokenInterceptor', ['$log', '$q', '$window', '$rootScope', '$location', '$injector', function ($log, $q, $window, $rootScope, $location, $injector) {
    return {
        request: function (config) {
            var UserService = $injector.get('UserService');            
            config.headers = config.headers || {};
            if (UserService.token()) {
                config.headers['X-Auth-Token'] = UserService.token();
            }
            return config;
        },
 
        response: function (response) {
            return response || $q.when(response);
        },

        responseError: function(rejection) {
   
            // Unauthorized
            if (rejection.status == 403) {
                $rootScope.logout();
            }
            
            return $q.reject(rejection);
        }
    };
}]);