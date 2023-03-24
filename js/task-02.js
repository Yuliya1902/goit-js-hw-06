const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector("#ingredients");
 
let ingredientsArr = [];

 ingredients.forEach(function(ingredient) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList = "item";
  return ingredientsArr.push(listItem);
 });

 ingredientsRef.append( ...ingredientsArr);