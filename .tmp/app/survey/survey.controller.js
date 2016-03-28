'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
  var SurveyController = function SurveyController() {
    _classCallCheck(this, SurveyController);
  };

  angular.module('talkparadigmApp').component('survey', {
    templateUrl: 'app/survey/survey.html',
    controller: SurveyController
  }).controller('cardSubmit', function ($scope, $http, $log, $timeout, $location) {

    $scope.checkName = function (event) {
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
      } else if (event.target.value === 'Daniel') {
        return true;
      } else if (event.target.value === 'Michael') {
        return true;
      } else if (event.target.value === 'Alex') {
        return true;
      } else if (event.target.value === 'Shane') {
        return true;
      } else if (event.target.value === 'Mars') {
        return true;
      } else if (event.target.value === 'Amanda') {
        return true;
      } else if (event.target.value === 'Cathryn') {
        return true;
      } else if (event.target.value === 'Cassie') {
        return true;
      } else if (event.target.value === 'Charlie') {
        return true;
      } else if (event.target.value === 'Delphia') {
        return true;
      } else if (event.target.value === 'Mariel') {
        return true;
      } else if (event.target.value === 'Muhan') {
        return true;
      } else if (event.target.value === 'Michael') {
        return true;
      } else if (event.target.value === 'Alyssa') {
        return true;
      } else if (event.target.value === 'Kyle') {
        return true;
      } else if (event.target.value === 'Haley') {
        return true;
      } else if (event.target.value === 'Ben') {
        return true;
      } else if (event.target.value === 'Mark') {
        return true;
      } else if (event.target.value === 'Avery') {
        return true;
      } else if (event.target.value === 'Katie') {
        return true;
      } else if (event.target.value === 'Kelsey') {
        return true;
      } else if (event.target.value === 'Kevin') {
        return true;
      } else if (event.target.value === 'Max') {
        return true;
      } else {
        return false;
      }
    };

    var _name = '';
    $scope.user = {
      name: function name(newName) {
        // Note that newName can be undefined for two reasons:
        // 1. Because it is called as a getter and thus called with no arguments
        // 2. Because the property should actually be set to undefined. This happens e.g. if the
        //    input is invalid
        if (newName === '849390') {
          return arguments.length ? _name = 'Jacky' : _name;
        } else if (newName === '468294') {
          return arguments.length ? _name = 'Kelly' : _name;
        } else if (newName === '720592') {
          return arguments.length ? _name = 'Wayne' : _name;
        } else if (newName === '026783') {
          return arguments.length ? _name = 'Alicia' : _name;
        } else if (newName === '019398') {
          return arguments.length ? _name = 'Nick' : _name;
        } else if (newName === '184275') {
          return arguments.length ? _name = 'Daniel' : _name;
        } else if (newName === '236583') {
          return arguments.length ? _name = 'Michael' : _name;
        } else if (newName === '958293') {
          return arguments.length ? _name = 'Alex' : _name;
        } else if (newName === '846182') {
          return arguments.length ? _name = 'Shane' : _name;
        } else if (newName === '438102') {
          return arguments.length ? _name = 'Mars' : _name;
        } else if (newName === '573710') {
          return arguments.length ? _name = 'Amanda' : _name;
        } else if (newName === '562305') {
          return arguments.length ? _name = 'Cathryn' : _name;
        } else if (newName === '687281') {
          return arguments.length ? _name = 'Cassie' : _name;
        } else if (newName === '468294') {
          return arguments.length ? _name = 'Charlie' : _name;
        } else if (newName === '004281') {
          return arguments.length ? _name = 'Delphia' : _name;
        } else if (newName === '192049') {
          return arguments.length ? _name = 'Mariel' : _name;
        } else if (newName === '142845') {
          return arguments.length ? _name = 'Muhan' : _name;
        } else if (newName === '313949') {
          return arguments.length ? _name = 'Michael' : _name;
        } else if (newName === '582901') {
          return arguments.length ? _name = 'Alyssa' : _name;
        } else if (newName === '192940') {
          return arguments.length ? _name = 'Kyle' : _name;
        } else if (newName === '142320') {
          return arguments.length ? _name = 'Haley' : _name;
        } else if (newName === '829102') {
          return arguments.length ? _name = 'Ben' : _name;
        } else if (newName === '901823') {
          return arguments.length ? _name = 'Mark' : _name;
        } else if (newName === '028181') {
          return arguments.length ? _name = 'Avery' : _name;
        } else if (newName === '789391') {
          return arguments.length ? _name = 'Katie' : _name;
        } else if (newName === '757177') {
          return arguments.length ? _name = 'Kelsey' : _name;
        } else if (newName === '882171') {
          return arguments.length ? _name = 'Kevin' : _name;
        } else if (newName === '673902') {
          return arguments.length ? _name = 'Max' : _name;
        } else {
          return arguments.length ? _name = newName : _name;
        }
      }
    };
    // Inititate the promise tracker to track form submissions.
    //$scope.progress = promiseTracker();

    // Form submit handler.
    $scope.submit = function (form) {
      // Trigger validation flag.
      $scope.submitted = true;

      // If form is invalid, return and let AngularJS show validation errors.
      if (form.$invalid) {
        return;
      }

      var res = {
        'name': $scope.cardForm.name,
        'email': $scope.cardForm.email,
        'comments': $scope.cardForm.comments
      };

      // Perform JSONP request.
      $http.post('/send', res).success(function (data, status, headers, config) {
        if (data.status == 'OK') {
          $scope.cardForm.name = null;
          $scope.cardForm.email = null;
          $scope.cardForm.comments = null;
          $scope.messages = 'Your form has been sent!';
          $scope.cardForm.submitted = false;
          $location.path('/thanks');
        } else {
          $scope.messages = 'Oops, we received your request, but there was an error processing it.';
          $log.error(data);
        }
      }).error(function (data, status, headers, config) {
        $scope.messages = 'There was a network error. Try again later.';
        $log.error(data);
      })['finally'](function () {
        // Hide status messages after three seconds.
        $timeout(function () {
          $scope.messages = null;
        }, 3000);
      });

      // Track the request and show its progress to the user.
      //$scope.progress.addPromise($promise);
    };
  });
})();
//# sourceMappingURL=survey.controller.js.map
