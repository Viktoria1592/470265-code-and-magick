'use strict';

(function () {
  var popup = document.querySelector('.setup');
  var popupOpenButton = document.querySelector('.setup-open');
  var popupCloseButton = popup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.utils.isEscEvent(evt, closePopup);
  };

  var onOpenBtnEnterPress = function (evt) {
    window.utils.isEnterEvent(evt, openPopup);
  };

  var onCloseBtnEnterPress = function (evt) {
    window.utils.isEnterEvent(evt, closePopup);
  };

  var resetPopupPosition = function () {
    popup.style.left = '';
    popup.style.top = '';
  };

  var openPopup = function () {
    popup.classList.remove('hidden');
    resetPopupPosition();
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    popup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  popupOpenButton.addEventListener('click', openPopup);
  popupOpenButton.addEventListener('keydown', onOpenBtnEnterPress);
  popupCloseButton.addEventListener('click', closePopup);
  popupCloseButton.addEventListener('keydown', onCloseBtnEnterPress);

  var dialogHandle = popup.querySelector('.upload');
  window.DragNDrop.default(dialogHandle, popup);

  window.dialog = {
    popup: popup,
    onPopupEscPress: onPopupEscPress
  };
})();
