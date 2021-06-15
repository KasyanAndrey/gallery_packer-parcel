// import imageCardTpl from '../templates/image-card.hbs';
import imageCardsTpl from '../templates/image-cards.hbs';

import galleryItems from './gallery-items.json';

function createImagesCardsMarkup(images) {
  // return images.map(imageCardTpl).join(''); // image-card.hbs(для создания одной карточки)
  return imageCardsTpl(images);
}

const itemsImagesCardsMarkup = createImagesCardsMarkup(galleryItems);

export default itemsImagesCardsMarkup;
