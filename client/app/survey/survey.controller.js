'use strict';

(function() {

  class SurveyController {

    
  }

  angular.module('talkparadigmApp')
    .component('survey', {
      templateUrl: 'app/survey/survey.html',
      controller: SurveyController
    })
    .controller('cardSubmit', function ($scope, $http, $log, $timeout, $location) {

      $scope.checkName = function(event) {
        if (event.target.value === 'Jacky') {
          return true;
        } else if (event.target.value === 'Kelly') {
          return true;
        } else if (event.target.value === 'Wayne') {
          return true;
        } else if (event.target.value === 'Alicia') {
          return true;
        } else if (event.target.value === 'Nick') {
          return true;
        } else {
          return false;
        }
      };

      var _name = '';
      $scope.user = {
        name: function(newName) {
       // Note that newName can be undefined for two reasons:
       // 1. Because it is called as a getter and thus called with no arguments
       // 2. Because the property should actually be set to undefined. This happens e.g. if the
       //    input is invalid
          if (newName === '1234') {
            return arguments.length ? (_name = 'Jacky') : _name;
          } else if (newName === '2345') {
            return arguments.length ? (_name = 'Kelly') : _name;
          } else if (newName === '3456') {
            return arguments.length ? (_name = 'Wayne') : _name;
          } else if (newName === '4567') {
            return arguments.length ? (_name = 'Alicia') : _name;
          } else if (newName === '5678') {
            return arguments.length ? (_name = 'Nick') : _name;
          } else {
            return arguments.length ? (_name = newName) : _name;
          }
        }
      };
      // Inititate the promise tracker to track form submissions.
      //$scope.progress = promiseTracker();

      // Form submit handler.
      $scope.submit = function(form) {
        // Trigger validation flag.
        $scope.submitted = true;

        // If form is invalid, return and let AngularJS show validation errors.
        if (form.$invalid) {
          return;
        }

        var res = {
          'name' : $scope.cardForm.name,
          'email' : $scope.cardForm.email,
          'comments' : $scope.cardForm.comments
        };

        // Perform JSONP request.
        $http.post('/send', res)
          .success(function(data, status, headers, config) {
            if (data.status == 'OK') {
              $scope.cardForm.name = null;
              $scope.cardForm.email = null;
              $scope.cardForm.comments = null;
              $scope.messages = 'Your form has been sent!';
              $scope.cardForm.submitted = false;
            } else {
              $scope.messages = 'Oops, we received your request, but there was an error processing it.';
              $log.error(data);
            }
          })
          .error(function(data, status, headers, config) {
            $scope.messages = 'There was a network error. Try again later.';
            $log.error(data);
          })
          .finally(function() {
            // Hide status messages after three seconds.
            $timeout(function() {
              $scope.messages = null;
            }, 3000);
          });

        // Track the request and show its progress to the user.
        //$scope.progress.addPromise($promise);
      };
    });  

})();
