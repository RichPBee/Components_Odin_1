const createButton = (buttonName, listId) => { 
    let btn = document.createElement('button');
    btn.setAttribute('class', 'drop-down-button');
    btn.innerText = buttonName;
    btn.addEventListener('click', () => { 
        toggleHidden(listId);
    })
    return btn;
}

const createList = (listItems, listId) => { 
    const list = document.createElement('ul');
    list.setAttribute('class', 'drop-down-list');
    list.setAttribute('id', listId)
    list.setAttribute('visibility', 'hidden');
    list.style.visibility = 'hidden';
    listItems.forEach((item) => { 
        let li = document.createElement('li')
        li.innerText = item.text;
        li.setAttribute('class', 'drop-down-list-item');
        list.appendChild(li);
    })
    return list;
}

const toggleHidden = (listId) => { 
    const list = document.getElementById(listId);
    const isHidden = list.getAttribute('visibility');
    if (isHidden === 'visible') {
        list.setAttribute('visibility', 'hidden');
        list.style.visibility = 'hidden';
    }
    else if (isHidden === 'hidden')
    {
        list.setAttribute('visibility', 'visible');
        list.style.visibility = 'visible';
    }
    else 
    {
        console.error('unknown')
    }
}

const createDropDown = (
    Id,
    buttonName,
    listItems,
    listId
    ) => { 
    const dropDown = document.createElement('div');
    dropDown.setAttribute('id', Id);
    dropDown.setAttribute('class', 'drop-down');

    const button = createButton(buttonName, listId);

    const list = createList(listItems, listId);

    dropDown.appendChild(button);
    dropDown.appendChild(list);
    return dropDown;
}

export { createDropDown }