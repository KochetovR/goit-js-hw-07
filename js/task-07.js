const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', par => {
    const fontSizeValue = par.currentTarget.value
    
    spanEl.style.fontSize = `${fontSizeValue}px`;
})
