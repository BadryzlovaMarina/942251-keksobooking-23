const SIMILAR_AD_COUNT = 10;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const AVATAR_NO_LEADING_ZERO = 10;

const titles = ['Hyatt Regency', 'Marins Park Hotel', 'Park Inn by Radisson', 'Sea Galaxy Hotel Congress & Spa', 'Guest House on Lermontova 8', 'VIP House', 'Villa on Malinka 98', 'Leo House', 'Aura Glamping', 'Breeze & bike'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const rooms = [1, 2, 3, 100];
const guests = [0, 1, 2, 3];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptions = ['This hotel features a free wellness center with swimming pool and sauna, and spacious rooms overlooking the Black Sea.', 'The property offers free WiFi and stylish rooms with a flat-screen TV.', 'This 4-star hotel offers a 24-hour front desk and free WiFi.', 'Aura Glamping has a terrace. Guests can relax in the garden at the property.', 'Grand Marina retail outlet and the Sea Port are within a 5-minute walk away.', 'A children\'s playground and an outdoor swimming pool.', 'Offering a restaurant and a fitness center.', ' It features a private beach, several gourmet restaurants.'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArray = (elements) => elements.sort(() => Math.random() - Math.random()).slice(0, getRandomPositiveInteger(0, elements.length-1));

const getAvatarNumber = (avatarNumber) => {
  avatarNumber++;
  return (avatarNumber < AVATAR_NO_LEADING_ZERO) ? `img/avatars/user0${avatarNumber}.png` : `img/avatars/user${avatarNumber}.png`;
};

const locality = {
  coordinateX: getRandomPositiveFloat(LAT_MIN, LAT_MAX),
  coordinateY: getRandomPositiveFloat(LNG_MIN, LNG_MAX),
};

const createAd = (index) => ({
  author: {
    avatar: getAvatarNumber(index),
  },
  offer: {
    title: getRandomArrayElement(titles),
    address: `${locality.coordinateX} , ${locality.coordinateY}`,
    price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(types),
    rooms: getRandomArrayElement(rooms),
    guests: getRandomArrayElement(guests),
    checkin: getRandomArrayElement(checkin),
    checkout: getRandomArrayElement(checkout),
    description: getRandomArrayElement(descriptions),
    features: getRandomArray(features),
    photos: getRandomArray(photos),
  },
  location: {
    lat: locality.coordinateX,
    lng: locality.coordinateY,
  },
});

const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map((currentValue, index) => createAd(index));

similarAds;
