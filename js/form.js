'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');
  var userDialog = document.querySelector('.setup-similar');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, window.backend.errorHandler);
    evt.preventDefault();
  });
})();
