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
    wizardTemplate.querySelector('.wizard-coat').style.fill = wizardObj.colorCoat;
    wizardTemplate.querySelector('.wizard-eyes').style.fill = wizardObj.colorEyes;
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

  var shopElement = window.dialog.popup.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      artifactsElement.style.outline = '2px dashed red';
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  shopElement.addEventListener('dragend', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      artifactsElement.style.outline = 'none';
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = 'none';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragend', function (evt) {
    evt.preventDefault();
  });
})();
