import galleryItems from './gallery-items';

function createImagesCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </li>
      `;
    })
    .join('');
}

const itemsImagesCardsMarkup = createImagesCardsMarkup(galleryItems);

export default itemsImagesCardsMarkup;
