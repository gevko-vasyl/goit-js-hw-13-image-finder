import galleryHbs from '../templates/gallery.hbs';
import refs from './refs';

function makeImageMarkup(images) {
    const markup = galleryHbs(images);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
};

function clearMarkup() {
    refs.gallery.innerHTML = '';
};
export default {makeImageMarkup, clearMarkup}