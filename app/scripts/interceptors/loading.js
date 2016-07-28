'use strict';

app.factory('LoadingInterceptor', ['$log', '$q', '$window', '$rootScope', '$location', '$injector', function ($log, $q, $window, $rootScope, $location, $injector) {
    return {
        request: function (config) {            
            
            var ionicLoading = $injector.get('$ionicLoading');
            ionicLoading.show({
                template: '<i class="icon ion-loading-c"></i>',
                animation: 'fade-in',
                showBackdrop: true,
                showDelay: 5
            });            

            return config;
        },
 
        response: function (response) {

            var ionicLoading = $injector.get('$ionicLoading');
            ionicLoading.hide();

            // var timeout = $injector.get('$timeout');
            // timeout(function(){
            //     var ionicLoading = $injector.get('$ionicLoading');
            //     ionicLoading.hide();
            // }, 1000);
            
            return response || $q.when(response);
        },

        responseError: function(rejection) {
                
            var ionicLoading = $injector.get('$ionicLoading');
            ionicLoading.hide();

            // var timeout = $injector.get('$timeout');
            // timeout(function(){
            //     var ionicLoading = $injector.get('$ionicLoading');
            //     ionicLoading.hide();
            // }, 1000);

            return $q.reject(rejection);
        }
    };
}]);