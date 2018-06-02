/**** Data ****/
function loadIngredients() {
   ingredientsList.push(new RestaurantObject("Milk", 3, 1, []));
   ingredientsList.push(new RestaurantObject("Flour", 1, 0.5, []));
   ingredientsList.push(new RestaurantObject("Sugar", 1, 0.5, []));
}

function loadRecipes() {
   recipesList.push(new RestaurantObject("Pancake", 0, 15, [
     {
       name:"Sugar", Qty: 2
     }, {
       name:"Milk", Qty: 1 
     }, {
       name:"Flour", Qty: 1
     }]));
}