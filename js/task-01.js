const ulElements = document.querySelectorAll('#categories .item');
console.log(`В списке ${ulElements.length} категории.`);

const liElement = document.querySelectorAll('#categories .item ul');

const getCategory = par => {
    for (let i = 0; i < par.length; i += 1) {
       console.log(`Категория:${par[i].previousElementSibling.textContent}`);
    console.log(`Количество элементов:${par[i].children.length}`); 
    }  
}

getCategory(liElement);

