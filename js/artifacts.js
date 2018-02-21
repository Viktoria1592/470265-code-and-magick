'use strict';

(function () {
  var shopElement = window.dialog.popup.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      artifactsElement.style.outline = '2px dashed red';
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    if (!evt.target.firstChild && evt.target.tagName.toLowerCase() !== 'img') {
      var draggedCopy = draggedItem.cloneNode(true);
      evt.target.appendChild(draggedCopy);
    }
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = 'none';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    artifactsElement.style.outline = '2px dashed red';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragend', function (evt) {
    artifactsElement.style.outline = 'none';
    evt.preventDefault();
  });

})();
