'use strict';

/**
* @ngdoc overview
* @name application
* @description
* # application
*
* Routes module of the application.
*/
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    /**
    * AUTH login/register
    * @type {String}
    */


    /**
    * Application Routes
    * @type {String}
    */
    .state('app', {
        url: '/',
        abstract: true,
        templateUrl: "./views/layouts/default.html"
    })


    .state('app.home', {
        url: '',
        views: {
            'appContent' :{
                templateUrl: './views/layouts/default.html'
            }
        }
    })

    .state('app.ponedjeljak', {
        url: 'ponedjeljak',
        data : {
            cssClassnames : 'ponedjeljak'
        },
        views: {
            'appContent' :{
                templateUrl: './views/ponedjeljak.html'
            }
        }
    })
    .state('app.utorak', {
        url: 'utorak',
        data : {
            cssClassnames : 'utorak'
        },
        views: {
            'appContent' :{
                templateUrl: './views/utorak.html'
            }
        }
    })
    .state('app.srijeda', {
        url: 'srijeda',
        data : {
            cssClassnames : 'srijeda'
        },
        views: {
            'appContent' :{
                templateUrl: './views/srijeda.html'
            }
        }
    })
    .state('app.cetvrtak', {
        url: 'cetvrtak',
        data : {
            cssClassnames : 'cetvrtak'
        },
        views: {
            'appContent' :{
                templateUrl: './views/cetvrtak.html'
            }
        }
    })
    .state('app.petak', {
        url: 'petak',
        data : {
            cssClassnames : 'petak'
        },
        views: {
            'appContent' :{
                templateUrl: './views/petak.html'
            }
        }
    });






    /**
    * Default Route
    */
    $urlRouterProvider
    .otherwise('/');

});
