const inputEl = document.querySelector('#controls input')
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const collectionDiv = document.querySelector('#boxes')

let divElements = ''

renderBtn.addEventListener('click', () => {
    clearBoxes()
    let w = 20;
    let h = 20;
    const arrBoxes = []
    let arr = Array.from(Array(Number(inputEl.value)).keys())
    arr.map(() => {
        w += 10;
        h += 10;
        let r = Math.round(255 * Math.random());
        let g = Math.round(255 * Math.random());
        let b = Math.round(255 * Math.random());
        arrBoxes.push(`<div class="el" style="background-color: rgb(${r}, ${g}, ${b}); width: ${w}px; height: ${h}px"></div>`)
    });
    collectionDiv.insertAdjacentHTML('beforeend', arrBoxes.join(''));
    divElements = document.querySelectorAll('.el')
})

   destroyBtn.addEventListener('click', () => {
       clearBoxes()
       inputEl.value = '';
   })

const clearBoxes = () => {
    Array.from(divElements).map(el => {
        el.remove();
    })
    }

