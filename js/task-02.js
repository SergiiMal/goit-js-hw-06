const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const elementArray = [] 
for (const ingredient of ingredients) {

  const liElem = document.createElement("li")
  liElem.textContent = ingredient;
  liElem.classList.add("item");
  elementArray.push(liElem)
}
ingredientsList.append(...elementArray);



