const ulElements = document.querySelectorAll('#categories .item');
console.log(`В списке ${ulElements.length} категории.`);

const liElement = document.querySelectorAll('#categories .item ul');

const getCategory = (par, num) => {
    console.log(`Категория:${par[num].previousElementSibling.textContent}`);
    console.log(`Количество элементов:${par[num].children.length}`);
}

getCategory(liElement, 2);
