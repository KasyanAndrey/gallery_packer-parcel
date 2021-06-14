const lightboxEl = document.querySelector('.lightbox');

export const onGalleryOpenLightBox = () => {
  lightboxEl.classList.add('is-open');
};

export const onGalleryCloseLightBox = () => {
  lightboxEl.classList.remove('is-open');
};
