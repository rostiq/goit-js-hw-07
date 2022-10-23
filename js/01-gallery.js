import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGallery = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
});

gallery.insertAdjacentHTML('afterbegin', createGallery.join(''));

gallery.addEventListener('click', createUrl);

function createUrl(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `,
    {
        onClose: (instance) => {
            window.removeEventListener('keydown', closeOnEsc);
        },
        onShow: (instance) => {
            window.addEventListener('keydown', closeOnEsc);
        }
    });
    instance.show();

    function closeOnEsc(event) {
        if (event.code !== 'Escape') {
            return;
        }
        instance.close();
    }
};





























