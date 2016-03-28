'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MainController = (function () {
    function MainController($http) {
      _classCallCheck(this, MainController);

      this.$http = $http;
      this.awesomeThings = [];
      this.talkparadigmCards = [{
        image: "/assets/cards/card_front.png",
        content: ""
      }, {
        image: "/assets/cards/card_back.png",
        content: "When somebody asks me where I'm from, I feel like I'll never belong."
      }, {
        image: "/assets/cards/card_back.png",
        content: "Marriage doesn't have to mean sacrificing your last name."
      }, {
        image: "/assets/cards/card_back.png",
        content: "When somebody catcalls me, it makes me feel like I don't have ownership of my own body."
      }, {
        image: "/assets/cards/card_back.png",
        content: "Somebody at a party makes a racist remark. What do you do?"
      }, {
        image: "/assets/cards/card_back.png",
        content: "I've been in school for four years and my dad has never asked me what I'm studying. I see him everyday."
      }, {
        image: "/assets/cards/card_back.png",
        content: "Did you attend a public or private school?"
      }];
    }

    _createClass(MainController, [{
      key: "$onInit",
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/things').then(function (response) {
          _this.awesomeThings = response.data;
        });
      }
    }, {
      key: "addThing",
      value: function addThing() {
        if (this.newThing) {
          this.$http.post('/api/things', { name: this.newThing });
          this.newThing = '';
        }
      }
    }, {
      key: "deleteThing",
      value: function deleteThing(thing) {
        this.$http["delete"]('/api/things/' + thing._id);
      }
    }]);

    return MainController;
  })();

  angular.module('talkparadigmApp').component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
})();
//# sourceMappingURL=main.controller.js.map
