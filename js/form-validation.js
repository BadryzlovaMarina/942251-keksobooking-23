import {roomCapacity} from './data.js';

const adForm = document.querySelector('.ad-form');
const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');

if (adTitleInput) {

  adTitleInput.addEventListener('invalid', () => {
    if (adTitleInput.validity.valueMissing) {
      adTitleInput.setCustomValidity('Обязательное поле');
    }
  });

  adTitleInput.addEventListener('input', () => {
    const minLength = adTitleInput.getAttribute('minlength');
    const maxLength = adTitleInput.getAttribute('maxlength');
    const valueLength = adTitleInput.value.length;
    const { tooShort, tooLong, valueMissing } = adTitleInput.validity;

    if (tooShort) {
      adTitleInput.setCustomValidity(`Ещё ${  minLength - valueLength } симв.`);
    } else if (tooLong) {
      adTitleInput.setCustomValidity(`Удалите лишние ${  valueLength - maxLength } симв.`);
    } else if (valueMissing) {
      adTitleInput.setCustomValidity('Обязательное поле');
    } else {
      adTitleInput.setCustomValidity('');
    }

    adTitleInput.reportValidity();
  });
}

if (adPriceInput) {

  adPriceInput.addEventListener('input', () => {
    const minValue = adPriceInput.getAttribute('min');
    const maxValue = adPriceInput.getAttribute('max');
    const { rangeOverflow, rangeUnderflow, valueMissing } = adPriceInput.validity;

    if (rangeUnderflow) {
      adPriceInput.setCustomValidity(`Минимальная цена ${minValue}`);
    } else if (rangeOverflow) {
      adPriceInput.setCustomValidity(`Цена не должна превышать ${maxValue}`);
    } else if (valueMissing) {
      adPriceInput.setCustomValidity('Обязательное поле');
    } else {
      adPriceInput.setCustomValidity('');
    }

    adPriceInput.reportValidity();
  });
}