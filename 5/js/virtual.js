'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.virtual = {
    getRandomBetween: function (min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
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
