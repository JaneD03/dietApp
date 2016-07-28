'use strict';

/**
 * @ngdoc overview
 * @name application
 * @description
 * # application
 *
 * Main module of the application.
 */
var app = angular.
module('application', [
    'config',
    'ionic',
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-flash.service',
    'angular-flash.flash-alert-directive',
    'LocalStorageModule'
]);


app.config(['$httpProvider', '$ionicConfigProvider',
  function($httpProvider, $ionicConfigProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
    $httpProvider.interceptors.push('ValidationInterceptor');
    $httpProvider.interceptors.push('ErrorInterceptor');
    $httpProvider.interceptors.push('MessageInterceptor');
    $httpProvider.interceptors.push('LoadingInterceptor');

    $ionicConfigProvider.tabs.position("bottom");
  }

]);


