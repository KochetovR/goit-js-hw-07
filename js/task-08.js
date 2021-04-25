const inputEl = document.querySelector('#controls input')
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const collectionDiv = document.querySelector('#boxes')

let w = 20;
let h = 20;

const createBoxes = (amount) => {
    
    for (let i = 0; i < amount.currentTarget.value; i += 1){
        w += 10;
        h += 10;
        let r = Math.round(255 * Math.random());
        let g = Math.round(255 * Math.random());
        let b = Math.round(255 * Math.random());
        
        let collectionEl = document.createElement('div')
           
        collectionEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        collectionEl.style.width = `${w}px`; 
        collectionEl.style.height = `${h}px`;
    
        renderBtn.addEventListener('click', () => {
        collectionDiv.append(collectionEl);  
        })
         destroyBtn.addEventListener('click', () => {
            collectionDiv.remove();
            inputEl.value = '';
    })
    } 
}

inputEl.addEventListener('input', createBoxes)



