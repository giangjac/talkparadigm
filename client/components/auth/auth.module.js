'use strict';

angular.module('talkparadigmApp.auth', [
  'talkparadigmApp.constants',
  'talkparadigmApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
