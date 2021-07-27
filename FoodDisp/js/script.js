window.addEventListener("DOMContentLoaded", () => {
    const tabs = require("./modules/tabs"),
          timer = require("./modules/timer"),
          cards = require("./modules/cards"),
          slider = require("./modules/slider"),
          modal = require("./modules/modal"),
          forms = require("./modules/forms"),
          calculator = require("./modules/calculator");

    tabs();
    timer();
    slider();
    modal();
    forms();
    cards();
    calculator();
});