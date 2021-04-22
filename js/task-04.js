const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const clearBtn = document.querySelector('[data-action="clear"]')
let value = 0;

decrementBtn.addEventListener('click', decrement);

function decrement() {
    value -= 1;
    counterEl.textContent = value;
};

incrementBtn.addEventListener('click', increment);

function increment() {
    value += 1;
    counterEl.textContent = value;
};

clearBtn.addEventListener('click', () => {
    value = 0
    counterEl.textContent = value;
})

