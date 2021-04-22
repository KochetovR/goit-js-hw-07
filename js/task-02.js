const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');


const items = ingredients.map(par => {
    const item = document.createElement('li');
    item.textContent = par;

    return item;
})

// запасной вариант
// const items = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//     const item = document.createElement('li');
//     item.textContent = ingredients[i]
//     items.push(item);
// }

listIngredients.append(...items);


