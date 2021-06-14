const lightboxImageEl = document.querySelector('.lightbox__image');

export const onСhangeValueAttributeEl = value => {
  lightboxImageEl.src = `${value}`;
};

export const onCleasValueAttributeEl = () => {
  lightboxImageEl.src = '';
};
