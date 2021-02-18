import './styles.css';
import refs from './js/refs';
import lightBox from './js/lightbox'
import showImage from './js/search-image'



refs.form.addEventListener('submit', showImage);

refs.gallery.addEventListener('click', lightBox);


