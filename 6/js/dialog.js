'use strict';

(function () {
  var POPUP_INITIAL_X = '50%';
  var POPUP_INITIAL_Y = '80px';
  var popup = document.querySelector('.setup');
  var popupOpenButton = document.querySelector('.setup-open');
  var popupCloseButton = popup.querySelector('.setup-close');
  popup.classList.remove('hidden');

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
    popup.style.left = POPUP_INITIAL_X;
    popup.style.top = POPUP_INITIAL_Y;
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

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      popup.style.top = (popup.offsetTop - shift.y) + 'px';
      popup.style.left = (popup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };

        dialogHandle.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.dialog = {
    popup: popup,
    onPopupEscPress: onPopupEscPress
  };
})();
