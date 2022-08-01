const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elemIngredients = document.querySelector("#ingredients");
console.log(elemIngredients);
console.log(ingredients);

const liIngredients = ingredients.map((ingridient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingridient;
  listItem.classList.add("item");
  return listItem;
});
elemIngredients.append(...liIngredients);
