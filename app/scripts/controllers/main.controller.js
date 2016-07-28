'use strict';

/**
 * @ngdoc function
 * @name application.controller:MainController
 * @description
 * # MainController
 * Controller of the application
 */
app.controller('MainController', ['UserService', '$rootScope', '$scope', '$log', '$injector', '$state', '$q', 'flash', '$ionicLoading', '$timeout', '$window', '$ionicViewService', '$location', function(UserService, $rootScope, $scope, $log, $injector, $state, $q, flash, $ionicLoading, $timeout, $window, $ionicViewService, $location) {


    /**
     * Global variable if back button is visible or not
     * used for ex for hiding menu button
     * @param  {[type]} e    [description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    $rootScope.$on('$viewHistory.historyChange', function(e, data) {
        $scope.isBackButtonShown = !!data.showBack;
    });
}]);

