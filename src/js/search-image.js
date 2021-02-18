import observer from './observer';
import apiSevice from './services/apiService';
import markup from './markup'
import error from './notifications';

let searchQuery = '';

async function searchImage() {
    try {
        const imageList = await apiSevice.fetchImage(searchQuery);
        console.log(imageList)
        if (imageList.length === 0) {
         () => error({
            text: 'Incorrect request. Try again!',
            delay: 300,
        });
            return
        };


        markup.makeImageMarkup(imageList);
        observer(searchImage);
    } catch {
        () => error({
            text: 'Something went wrong!',
            delay: 300,
        });
    }
};

function showImage(event) {
    event.preventDefault();
    markup.clearMarkup();
    const input = event.currentTarget;
    searchQuery = input.elements.query.value;   
    apiSevice.resetPage();  
    searchImage(searchQuery);
    input.reset();
}

export default showImage;