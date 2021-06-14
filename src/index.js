import itemsImagesCardsMarkup from './js/createImagesCardsMarkup';
import onImagesListClick from './js/onImagesListClick';
import onCloseBtnClick from './js/onCloseBtnClick';

const imagesList = document.querySelector('ul.js-gallery');
imagesList.insertAdjacentHTML('beforeend', itemsImagesCardsMarkup);
imagesList.addEventListener('click', onImagesListClick);

const closeBtnEl = document.querySelector(
  'button[data-action="close-lightbox"]',
);
closeBtnEl.addEventListener('click', onCloseBtnClick);
