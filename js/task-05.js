const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', changeOutputValue);

function changeOutputValue(par) {
    outputEl.textContent = par.currentTarget.value;
} 

