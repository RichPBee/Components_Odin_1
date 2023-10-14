const { createDropDown } = require("./Components/DropDown");

window.onload = (event) => {  
    const mainContainer = document.getElementById('content');
    const dropDown = createDropDown('dd1', 'MENU', 
        [
            {text: 'HOME'},
            {text: 'ABOUT'},
            {text: 'CONTACT'}
        ], 'list-one'
    );
    mainContainer.appendChild(dropDown);
}