const header = document.querySelector('.first');
console.log(header);
const text = document.querySelector('#second');
console.log(text)

function changeContent() {
    header.textContent = " document object model"
};

function changeElement() {
    text.innerHTML = " this is nice <strong> , excellent </strong>"
};