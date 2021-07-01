import {createAds, typeHousing} from './data.js';

const mapContainer  = document.querySelector('.map__canvas');

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const cardListFragment = document.createDocumentFragment();

const similarAds = createAds();

const getCardFeatures = (featureElements, cardFeatures) => {
  const modifiers = cardFeatures.map((feature) => `popup__feature--${feature}`);

  featureElements.forEach((item) => {
    const modifier = item.classList[1];

    if(!modifiers.includes(modifier)) {
      item.remove();
    }
  });
};

const getCardPhotos = (photoContainer, photoTemplate, cardPhotos) => {
  const photoListFragment = document.createDocumentFragment();

  photoContainer.innerHTML = '';

  if (cardPhotos.length === 0) {
    photoContainer.classList.add('hidden');
  } else {
    cardPhotos.forEach((item) => {
      const element = photoTemplate.cloneNode(true);
      element.src = item;
      photoListFragment.appendChild(element);
    });
    photoContainer.appendChild(photoListFragment);
  }
};

similarAds.forEach((card) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  cardElement.querySelector('.popup__type').textContent = typeHousing[card.offer.type];

  const descriptionElement = cardElement.querySelector('.popup__description');
  const cardDescription = card.offer.description;

  descriptionElement.textContent = cardDescription;

  if (cardDescription === '') {
    descriptionElement.classList.add('hidden');
  }

  const featureListElements = cardElement.querySelectorAll('.popup__feature');
  const cardFeaturesList = card.offer.features;
  getCardFeatures(featureListElements, cardFeaturesList);

  const photoContainer = cardElement.querySelector('.popup__photos');
  const photoElement = photoContainer.querySelector('.popup__photo');
  const cardPhotosList = card.offer.photos;
  getCardPhotos(photoContainer, photoElement, cardPhotosList);

  cardListFragment.appendChild(cardElement);
});

mapContainer.appendChild(cardListFragment);
