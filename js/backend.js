'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var form = document.querySelector('.setup-wizard-form');
  var userDialog = document.querySelector('.setup-similar');

  var successSaveHandler = function () {
    userDialog.classList.add('hidden');
  };

  var errorSaveHandler = function (errorMessage) {
    var div = document.createElement('div');
    div.style = 'z-index: 999; position: absolute; margin: 0; left: 0; top: 0; text-align: center; color: red; background-color: #fff; font-size: 30px;';

    div.textContent = errorMessage;
    document.body.insertAdjacteElement('afterbegin', div);
  };

  form.addEventListener('submit', function (evt) {
    window.save.upload(new FormData(form), successSaveHandler, errorSaveHandler);
    evt.preventDefault();
  });

  var successLoadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorLoadHandler = function (errorMessage) {
    var div = document.createElement('div');
    div.style = 'z-index: 999; position: absolute; margin: 0; left: 0; top: 0; text-align: center; color: red; background-color: #fff; font-size: 30px;';

    div.textContent = errorMessage;
    document.body.insertAdjacteElement('afterbegin', div);
  };

  window.backend.load(successLoadHandler, errorLoadHandler);

  window.backend = {
    load: function (onSuccess, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.open('GET', URL);

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      xhr.timeout = 1000;
      xhr.send();
    },
    save: function (data, onSuccess, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response);
        } else {
          onError('Ошибка' + xhr.status);
        }
      });

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
