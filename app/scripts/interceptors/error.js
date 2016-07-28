'use strict';

app.factory('ErrorInterceptor', ['$log', '$q', '$window', '$rootScope', '$location', '$injector', function ($log, $q, $window, $rootScope, $location, $injector) {
    return {
        request: function (config) {            
            return config;
        },
 
        response: function (response) {
            return response || $q.when(response);
        },

        responseError: function(rejection) {
   
            // Init false message
            // then check if we have some
            var message = false;

            // Bad Request error
            if (rejection.status == 400 || rejection.status == 500) {
                
                if(typeof rejection.data.message != 'undefined' &&  rejection.data.message != "") {
                    message = rejection.data.message;                   
                }                      
            }
            
            // If we got a message popup
            if(message) {
                
                // // Ionic popup for errors
                var ionicPopup = $injector.get('$ionicPopup');
                ionicPopup.alert({
                    title: 'An Error Occured',
                    template: message
                });
                
                // Flash for flash messages
                // var flash = $injector.get('flash');
                // flash.info = message;

            }

            return $q.reject(rejection);
        }
    };
}]);