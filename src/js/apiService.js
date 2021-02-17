const apiKey = '20312002-359243adeeeebb2bc74e90a1f'

export default {
    
    searchQuery:'',
    page: 1,
    
    async fetchImages() {
        const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

        return fetch(baseUrl)
            .then(responce => responce.json())
            .then(({ hits }) => {
                this.nextPage();
                console.log(this.page)
                return hits
            });
        // const fetch = await fetch(baseUrl);
        // const response = await fetch.json();
        // // const images = await { response };
        // return { images };

    },

    resetPage() {
        this.page = 1;
    },

    nextPage() {
        this.page = this.page + 1;
    },

    get query() {
        return this.searchQuery;
    },

    set query(value) {
        this.searchQuery = value;
    },

};