'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
      this.talkparadigmCards = [
        {
          image: "/assets/cards/card_front.png",
          content: ""
        },
        {
          image: "/assets/cards/card_back.png",
          content: "When somebody asks me where I'm from, I feel like I'll never belong."
        },
        {
          image: "/assets/cards/card_front.png",
          content: ""
        },
        {
          image: "/assets/cards/card_back.png",
          content: "Marriage doesn't have to mean sacrificing your last name."
        },
        {
          image: "/assets/cards/card_front.png",
          content: ""
        },
        {
          image: "/assets/cards/card_back.png",
          content: "When somebody catcalls me, it makes me feel like I don't have ownership of my own body."
        },
        {
          image: "/assets/cards/card_front.png",
          content: ""
        },
        {
          image: "/assets/cards/card_back.png",
          content: "Somebody at a party makes a racist remark. What do you do?"
        }
      ];
    }

    $onInit() {
      this.$http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
      });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', { name: this.newThing });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('talkparadigmApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });  

})();
