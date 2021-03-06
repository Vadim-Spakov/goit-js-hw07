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
// const galleryMarkup = images.map(({ url, alt }) => {
//   const imagesList = gallery.insertAdjacentHTML(
//     'beforeend',
//     `<li class="gallery-item">
//         <img class='gallery-img' src="${url}" alt="${alt}"</img>
//       </li>`,
//   );

//   return imagesList;
// });

// console.log(gallery);

// const galleryMarkup = document.querySelector('#gallery');
// console.log(galleryMarkup);
// galleryMarkup.classList.add('gallery-list');
// function createGallery(arr) {
//   const imagesList = arr.map(image =>{ 
//     const listItemRef = document.createElement('li');
//     listItemRef.insertAdjacentHTML(
//       'beforeend',
//       ` <img src = "${image.url}" alt = "${image.alt}" "width = "360" height="240">`,
//     );
//     listItemRef.setAttribute('class', 'gallery-list__item');

//     return listItemRef;
//   });

//   return galleryMarkup.append(...imagesList);
// }

// console.log(createGallery(images));


const imagesList = images.map(({ url, alt }) => {
  return `<li class="gallery-item">
              <img class="gallery-img" src="${url}" alt="${alt}"></img>
          </li>`;
});

gallery.insertAdjacentHTML('beforeend', imagesList.join(''));
console.log(gallery);

