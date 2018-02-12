'use strict';

(function () {
  var popup = document.querySelector('.setup');
  var popupOpenButton = document.querySelector('.setup-open');
  var popupCloseButton = popup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.virtual.isEscEvent(evt, closePopup);
  };

  var onOpenBtnEnterPress = function (evt) {
    window.virtual.isEnterEvent(evt, openPopup);
  };

  var onCloseBtnEnterPress = function (evt) {
    window.virtual.isEnterEvent(evt, closePopup);
  };

  var openPopup = function () {
    popup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    popup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  popupOpenButton.addEventListener('click', function () {
    openPopup();
  });

  popupOpenButton.addEventListener('keydown', onOpenBtnEnterPress);

  popupCloseButton.addEventListener('click', function () {
    closePopup();
  });

  popupCloseButton.addEventListener('keydown', onCloseBtnEnterPress);

  window.dialog = {
    popup: popup,
    onPopupEscPress: onPopupEscPress
  }
})();
