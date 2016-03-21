'use strict';

angular.module('talkparadigmApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('thanks', {
        url: '/thanks',
        template: '<thanks></thanks>'
      });
  });
