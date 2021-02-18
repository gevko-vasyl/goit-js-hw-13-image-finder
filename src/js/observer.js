function observer(searchImage) {
    const target = document.querySelector('.gallery li:last-child')
    const observer = new IntersectionObserver((entries, observer) => {


        entries.forEach(entry => {
            if (entry.isIntersecting) {
                searchImage();
                observer.unobserve(target);
            };
        });
    });
    observer.observe(target)
 }
export default observer;