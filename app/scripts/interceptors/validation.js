'use strict';

app.factory('ValidationInterceptor', ['$log', '$q', '$window', '$rootScope', '$location', '$injector', function ($log, $q, $window, $rootScope, $location, $injector) {
    return {
        request: function (config) {            
            return config;
        },
 
        response: function (response) {
            return response || $q.when(response);
        },

        responseError: function(rejection) {
               
            // Bad Request error
            if (rejection.status == 406) {
                
                var message = false;

                if(rejection.data.data !== null) {
                    message = '';
                    angular.forEach(rejection.data.data, function(value, key) {
                        message += value + '\n';
                    });
                } else {
                    message = rejection.data.message;
                }

                if(message) {
                    
                    // // Ionic popup for errors
                    var ionicPopup = $injector.get('$ionicPopup');
                    ionicPopup.alert({
                        title: 'Validation Failed',
                        template: message
                    });
                }
                
            }

            return $q.reject(rejection);
        }
    };
}]);