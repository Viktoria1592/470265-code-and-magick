'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var wizardSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var fragment = document.createDocumentFragment();
var similarWizards = [];

var getRandomBetween = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var generateSimilarWizards = function (targetArray, wizardsQuantity) {
  for (var i = 0; i <= wizardsQuantity; i++) {
    targetArray[i] = {};
    targetArray[i].name = WIZARD_NAMES[getRandomBetween(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandomBetween(0, WIZARD_SURNAMES.length - 1)];
    targetArray[i].coatColor = WIZARD_COAT_COLORS[getRandomBetween(0, WIZARD_COAT_COLORS.length - 1)];
    targetArray[i].eyesColor = WIZARD_EYES_COLORS[getRandomBetween(0, WIZARD_EYES_COLORS.length - 1)];
  }
};

var renderSimilarWizards = function (wizardsArray, targetNode) {
  for (var j = 0; j < wizardsArray.length; j++) {
    var wizard = similarWizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = wizardsArray[j].name;
    wizard.querySelector('.wizard-coat').style.fill = wizardsArray[j].coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = wizardsArray[j].eyesColor;

    fragment.appendChild(wizard);
  }

  targetNode.appendChild(fragment);
};

userDialog.classList.remove('hidden');

generateSimilarWizards(similarWizards, 4);

renderSimilarWizards(similarWizards, wizardSimilarList);

document.querySelector('.setup-similar').classList.remove('hidden');
