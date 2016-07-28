'use strict';

app.factory('MessageInterceptor', ['$log', '$q', '$window', '$rootScope', '$location', '$injector', function ($log, $q, $window, $rootScope, $location, $injector) {
    return {
        request: function (config) {            
            return config;
        },
 
        response: function (response) {
            if(response.data.message != "" && typeof response.data.message != 'undefined') {
                var flash = $injector.get('flash');
                flash.info = response.data.message;

            }

            return response || $q.when(response);
        },

        responseError: function(rejection) {
            
            return $q.reject(rejection);
        }
    };
}]);