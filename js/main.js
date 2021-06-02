//Получение случайного числа
//Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomIntInclusive = function (min, max) {

  min = Math.abs(min);
  max = Math.abs(max);

  if (max < min) {
    const swap = min;
    min = max;
    max = swap;
  }

  if (min === max) {
    max+=min;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomIntInclusive(0, 10);

const getRandomArbitrary = function (min, max, digits) {

  min = Math.abs(min);
  max = Math.abs(max);

  if (max < min) {
    const swap = min;
    min = max;
    max = swap;
  }

  if (min === max) {
    max+=min;
  }

  return (Math.random() * (max - min) + min).toFixed(digits);
};

getRandomArbitrary(0.0, 9.9, 1);
