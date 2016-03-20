'use strict';

angular.module('talkparadigmApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('survey', {
        url: '/survey',
        template: '<survey></survey>'
      });
  });
