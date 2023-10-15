const { buildDropDown } = require("./Components/DropDown");
const { Carousel } = require("./Components/Carousel")
window.onload = (event) => {  
    const mainContainer = document.getElementById('content');
    const dropDown = buildDropDown('dd1', 'MENU', 
        [
            {text: 'HOME'},
            {text: 'ABOUT'},
            {text: 'CONTACT'}
        ], 'list-one'
    );
    const carousel = new Carousel('first',
    [
        {src: 'https://placehold.co/400x350'},
        {src: 'https://placehold.co/401x350'},
        {src: 'https://placehold.co/399x350'},
        {src: 'https://placehold.co/401x350'},
        {src: 'https://placehold.co/399x350'}
    ]);
    mainContainer.appendChild(dropDown);
    mainContainer.appendChild(carousel);
}