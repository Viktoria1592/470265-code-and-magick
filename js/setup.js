'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var createWizard = function () {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    return similarWizardTemplate.cloneNode(true);
  };

  var fillSimilarWizard = function (wizardObj, wizardTemplate) {
    wizardTemplate.querySelector('.setup-similar-label').textContent = wizardObj.name;
    wizardTemplate.querySelector('.wizard-coat').style.fill = wizardObj.coatColor;
    wizardTemplate.querySelector('.wizard-eyes').style.fill = wizardObj.eyesColor;
    return wizardTemplate;
  };

  var renderSimilarWizards = function (obj) {
    var wizardEl = createWizard();
    return fillSimilarWizard(obj, wizardEl);
  };

  window.utils.colorize(window.dialog.popup.querySelector('.wizard-coat'), WIZARD_COAT_COLORS);
  window.utils.colorize(document.querySelector('.wizard-eyes'), WIZARD_EYES_COLORS);
  window.utils.colorize(document.querySelector('.setup-fireball-wrap'), WIZARD_FIREBALL_COLORS);

  var successLoadHandler = function (wizards) {
    var wizardSimilarList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    var randomWizards = window.utils.getRandomElementsFromArray(wizards, 4);
    for (var i = 0; i < randomWizards.length; i++) {
      fragment.appendChild(renderSimilarWizards(randomWizards[i]));
    }
    wizardSimilarList.appendChild(fragment);
    window.dialog.popup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(successLoadHandler, window.backend.errorHandler);
})();
