'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_COLOR = '#fff';
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var CLOUD_GAP = 10;
  var TEXT_COLOR = '#000';
  var FONT = '16px PT Mono';
  var TITLE_X = 120;
  var TITLE_Y = 40;
  var TEXT_HEIGHT = 20;
  var BAR_X = 140;
  var BAR_Y = 260;
  var BAR_WIDTH = 40;
  var BAR_COLOR = '0, 0, 255';
  var BAR_COLOR_SPECIAL = 'rgba(255, 0, 0, 1)';
  var GAP = 50;
  var VALUE_GAP = 10;
  var BAR_FULL_HEIGHT = 150;
  var BAR_MAX_HEIGHT = BAR_FULL_HEIGHT - VALUE_GAP;
  var TITLE_UPPER = 'Ура вы победили!';
  var TITLE_UNDER = 'Список результатов:';
  var TITLE_UNDER_Y = TITLE_Y + TEXT_HEIGHT;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderText = function (ctx, text, font, textColor, x, y) {
    ctx.font = font;
    ctx.fillStyle = textColor;
    ctx.fillText(text, x, y);
  };

  var getMaxValue = function (values) {
    var currentValue = 0;
    var maxValue = values[currentValue];
    for (var i = currentValue + 1; i < values.length; i++) {
      if (maxValue < values[i]) {
        maxValue = values[i];
      }
    }
    return maxValue;
  };

  var getRandomOpacity = function (color) {
    var max = 1;
    var min = 0.1;
    return 'rgba(' + color + ',' + (Math.random() * (max - min) + min).toFixed(1) + ')';
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, SHADOW_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

    renderText(ctx, TITLE_UPPER, FONT, TEXT_COLOR, TITLE_X, TITLE_Y);
    renderText(ctx, TITLE_UNDER, FONT, TEXT_COLOR, TITLE_X, TITLE_UNDER_Y);

    for (var i = 0; i < times.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = BAR_COLOR_SPECIAL;
      } else {
        ctx.fillStyle = getRandomOpacity(BAR_COLOR);
      }

      var barValueHeight = Math.round(Math.round(times[i]) * BAR_MAX_HEIGHT / getMaxValue(times));
      ctx.fillRect(BAR_X + (BAR_WIDTH + GAP) * i, BAR_Y - TEXT_HEIGHT - barValueHeight, BAR_WIDTH, barValueHeight);

      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(names[i], BAR_X + (BAR_WIDTH + GAP) * i, BAR_Y);
      ctx.fillText(Math.round(times[i]), BAR_X + (BAR_WIDTH + GAP) * i, BAR_Y - barValueHeight - TEXT_HEIGHT - CLOUD_GAP);
    }
  };
})();

