const categories = document.querySelectorAll('.item');
// console.log(categories);

const categoriesQuantity = categories.length;
console.log(`В списке ${categoriesQuantity} категории.`);

// console.log(categories);
categories.forEach(categories => {
  console.log(`Категория: ${categories.children[0].textContent}`),
    console.log(
      `Количество элементов: ${categories.children[1].children.length}`,
    );
});