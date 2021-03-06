import { onGalleryOpenLightBox } from './galleryLightBox';
import { on–°hangeValueAttributeEl } from './changeValueAttributeEl';

export default function onImagesListClick(event) {
  event.preventDefault();

  const isImageSwatchEl = event.target.classList.contains('gallery__image');
  if (!isImageSwatchEl) {
    return;
  }

  const swatchEl = event.target;
  const attributeSwatchEl = swatchEl.dataset.source;

  on–°hangeValueAttributeEl(attributeSwatchEl);
  onGalleryOpenLightBox();
}
