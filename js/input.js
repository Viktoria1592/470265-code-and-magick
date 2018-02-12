'use strict';

(function () {
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var userNameInput = window.dialog.popup.querySelector('.setup-user-name');

  var blurInput = function () {
    userNameInput.blur();
  };

  var onInputEscPress = function (evt) {
    window.virtual.isEscEvent(evt, blurInput);
  };

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', window.dialog.onPopupEscPress);
    document.addEventListener('keydown', onInputEscPress);
  });

  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', window.dialog.onPopupEscPress);
    document.removeEventListener('keydown', onInputEscPress);
  });

  window.virtual.colorize(window.dialog.popup.querySelector('.wizard-coat'), window.setup.WIZARD_COAT_COLORS);

  window.virtual.colorize(document.querySelector('.wizard-eyes'), window.setup.WIZARD_EYES_COLORS);

  window.virtual.colorize(document.querySelector('.setup-fireball-wrap'), WIZARD_FIREBALL_COLORS);
})();
