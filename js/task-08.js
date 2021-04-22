const inputEl = document.querySelector('#controls input')
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const collectionDiv = document.querySelector('#boxes')

const createBoxes = (amount) => {
    console.log(amount.currentTarget.value);

    renderBtn.addEventListener('click', () => {
        // const colorElement = Math.round(765.0 * Math.random());
        const collectionEl = document.createElement('div')
           
    // collectionEl.style.backgroundColor = `#${colorElement}`
    collectionEl.style.width = '30px';
    collectionEl.style.height = '30px'
    console.log(collectionEl)

    collectionDiv.append(collectionEl);  
    })
    
    
}

inputEl.addEventListener('input', createBoxes)

destroyBtn.addEventListener('click', () => {
    collectionDiv.remove();
})
