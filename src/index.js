import './styles.css';
import refs from './js/refs.js';
import galleryHbs from './templates/gallery.hbs';
import apiSevice from './js/apiService';
// import observer from './js/observer';


console.log(refs.form);

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.currentTarget;
    apiSevice.searchQuery = input.elements.query.value;
    input.reset();
    apiSevice.resetPage();
    clearMarkup();
    console.log(apiSevice.searchQuery);

    apiSevice.fetchImages().then(hits => makeImageMarkup(hits))
        .then(observer.observe(refs.gallery));


    // observer.observe(refs.sentinel)
    // observer().observe(refs.sentinel)
});




    const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.intersectionRatio > 0)) {
        return
    }
    apiSevice.fetchImages().then(hits => makeImageMarkup(hits));
    })





function makeImageMarkup(images) {
    const markup = galleryHbs(images);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
};


function clearMarkup() {
    refs.gallery.innerHTML = '';
};