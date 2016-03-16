'use strict';

angular.module('talkparadigmApp', [
  'talkparadigmApp.auth',
  'talkparadigmApp.admin',
  'talkparadigmApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'angular-carousel'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
