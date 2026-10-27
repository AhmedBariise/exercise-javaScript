const addItem = document.querySelector('list');

function newItem() {
    const newItem = document.createElement('li');
    newItem.textContent = " item 3"
    list.appendChild(newItem);
}

function removeItem() {
    if (list.lastChild) {
        list.removeChild(list.lastChild);

    } else {
        alert("good by bro")
    }
}