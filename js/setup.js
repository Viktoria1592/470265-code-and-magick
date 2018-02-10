'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandomBetween = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };

  var generateSimilarWizards = function (wizardsQuantity) {
    var arr = [];
    for (var i = 0; i <= wizardsQuantity; i++) {
      var obj = {};
      obj.name = WIZARD_NAMES[getRandomBetween(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandomBetween(0, WIZARD_SURNAMES.length - 1)];
      obj.coatColor = WIZARD_COAT_COLORS[getRandomBetween(0, WIZARD_COAT_COLORS.length - 1)];
      obj.eyesColor = WIZARD_EYES_COLORS[getRandomBetween(0, WIZARD_EYES_COLORS.length - 1)];
      arr.push(obj);
    }
    return arr;
  };

  var fragment = document.createDocumentFragment();

  var renderSimilarWizards = function (wizardsArray) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardSimilarList = document.querySelector('.setup-similar-list');
    for (var j = 0; j < wizardsArray.length; j++) {
      var wizard = similarWizardTemplate.cloneNode(true);
      wizard.querySelector('.setup-similar-label').textContent = wizardsArray[j].name;
      wizard.querySelector('.wizard-coat').style.fill = wizardsArray[j].coatColor;
      wizard.querySelector('.wizard-eyes').style.fill = wizardsArray[j].eyesColor;

      fragment.appendChild(wizard);
    }

    wizardSimilarList.appendChild(fragment);
  };

  var similarWizards = generateSimilarWizards(4);
  renderSimilarWizards(similarWizards);
  document.querySelector('.setup-similar').classList.remove('hidden');

  var popup = document.querySelector('.setup');
  var popupOpenButton = document.querySelector('.setup-open');
  var popupCloseButton = popup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
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

  popupOpenButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  popupCloseButton.addEventListener('click', function () {
    closePopup();
  });

  popupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  var userNameInput = popup.querySelector('.setup-user-name');

  var onInputEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      userNameInput.blur();
    }
  };

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
    document.addEventListener('keydown', onInputEscPress);
  });

  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
    document.removeEventListener('keydown', onInputEscPress);
  });

  var wizardCoat = document.querySelector('.wizard-coat');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.setAttribute('style', 'fill: ' + WIZARD_COAT_COLORS[getRandomBetween(0, WIZARD_COAT_COLORS.length - 1)]);
  });

  var wizardEyes = document.querySelector('.wizard-eyes');

  wizardEyes.addEventListener('click', function () {
    wizardEyes.setAttribute('style', 'fill: ' + WIZARD_EYES_COLORS[getRandomBetween(0, WIZARD_EYES_COLORS.length - 1)]);
  });

  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  wizardFireball.addEventListener('click', function () {
    wizardFireball.setAttribute('style', 'background: ' + WIZARD_FIREBALL_COLORS[getRandomBetween(0, WIZARD_FIREBALL_COLORS.length - 1)]);
  });
})();
