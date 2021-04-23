const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGallery = document.querySelector('#gallery')
listGallery.classList.add('list__img')

// const makeImgElements = images.map(par => {  
//     return listGallery.insertAdjacentHTML('beforeend', `<li class='list'><img class='img' src=${par.url} alt=${par.alt}></li>`);
// });

// const getImgElements = images.map(par => {
//     console.log(par)
//     return par;
// });
const getImgElements = images.map(par => {

  const elem = listGallery.insertAdjacentHTML('beforeend', `<li class='list'><img class='img' src=${par.url} alt=${par.alt}></li>`);
  
  const makeImgElements = () => {

    return elem;
}
});




// const makeImgElements = par => {
//   return par.map(el => {
//       return listGallery.insertAdjacentHTML('beforeend', `<li class='list'><img class='img' src=${el.url} alt=${el.alt}></li>`);
//     })
// };

// const makeImgElements = par => {
//   for (let i = 0; i < par.length; i += 1) {
//     const element = par[i]
//     listGallery.insertAdjacentHTML('beforeend', `<li class='list'><img class='img' src=${element.url} alt=${element.alt}></li>`);
//   } 
// };

// makeImgElements(images);




