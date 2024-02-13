localStorage.removeItem('keyLogger');
let keyPressList = '';

const bodyNode = document.querySelector('body');

function saveLoggedKeys() {
    localStorage.setItem("keyLogger",keyPressList);
    sessionStorage.setItem("keyLogger",keyPressList);
}

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', saveLoggedKeys);

bodyNode.addEventListener('keydown', (key) => {
    keyPressList += key.key;
})