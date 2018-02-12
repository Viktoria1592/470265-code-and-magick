'use strict';

(function () {
  window.ESC_KEYCODE = 27;
  window.ENTER_KEYCODE = 13;
  var COLORS = ['red', 'green', 'blue'];

   window.virtual = {
    getRandomBetween: function (min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE)
        action();
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE)
        action();
    },
    getRandomColor: function (colors) {
      return colors[Math.floor(colors.length * Math.random())];
    },
    colorize: function (element, colors) {
      element.addEventListener('click', function (evt) {
        var color = window.virtual.getRandomColor(colors);
        if (evt.target.tagName.toLowerCase() === 'div') {
          element.style.backgroundColor = color;
        } else {
          element.style.fill = color;
        }
      });
    }
   };
})();

