const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArray = (elements) => elements.sort(() => Math.random() - Math.random()).slice(0, getRandomPositiveInteger(0, elements.length-1));

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getPicturePath = (pictureNumber, pictureNoLeadingZero) => {
  pictureNumber++;
  return (pictureNumber < pictureNoLeadingZero) ? `img/avatars/user0${pictureNumber}.png` : `img/avatars/user${pictureNumber}.png`;
};

export {getRandomPositiveFloat, getRandomPositiveInteger, getRandomArray, getRandomArrayElement, getPicturePath};
