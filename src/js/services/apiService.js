const axios = require('axios');

const apiKey = '20312002-359243adeeeebb2bc74e90a1f'

let page = 1;

const fetchImage = async searchQuery => {
    try {
        const fetch = await axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`);
        page += 1;
        return fetch.data.hits;
    } catch {
        error({
            text: 'Something went wrong!',
            delay: 300,
        });
    };
};

const resetPage = () => {
    page = 1;
};

export default { fetchImage, resetPage };
