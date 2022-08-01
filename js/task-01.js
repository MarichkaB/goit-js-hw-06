const arrListCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${arrListCategories.length}`); // Number of categories: 3

arrListCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`),
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
