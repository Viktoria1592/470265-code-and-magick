'use strict';

(function () {
  var userNameInput = window.dialog.popup.querySelector('.setup-user-name');

  var blurInput = function () {
    userNameInput.blur();
  };

  var onInputEscPress = function (evt) {
    window.utils.isEscEvent(evt, blurInput);
  };

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', window.dialog.onPopupEscPress);
    document.addEventListener('keydown', onInputEscPress);
  });

  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', window.dialog.onPopupEscPress);
    document.removeEventListener('keydown', onInputEscPress);
  });

})();
