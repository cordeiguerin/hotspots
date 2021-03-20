var app = new Vue({
  el: "#app-jupiter",
  data: {
    title: "Hello Jupiter!",
    message: "Click on a highlighted section for more information"
  },
  methods: {
    infoGRS: function () {
      this.title = "The Great Red Spot:";
      this.message = "A storm of spinning red clouds about 1.3 times as wide as Earth!";
    },

    infoSize: function () {
      this.title = "Jupiter is Huge!";
      this.message = "Jupiter is 2.5 times more massive than all of the other planets in the Solar System combined!";
    },

    infoClouds: function () {
      this.title = "The clouds stink!";
      this.message = "The dark clouds are made up of ammonia crystals that change colour when they react with sunlight.";
    },

    infoRings: function () {
      this.title = "Jupiter has rings!";
      this.message = "Saturn is not the only planet in our solar system.  Jupiter and Uranus do too, they are just harder for us to see.";
    },

    infoMoons: function () {
      this.title = "Jupiter has 67 moons!";
      this.message = "Jupiter has more than 67 confirmed natural satellites as well as it's 4 major moons";
    }
  }
});
