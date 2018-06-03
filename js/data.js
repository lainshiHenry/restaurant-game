/**** Data ****/
function loadIngredients() {
    gameObjectList.push(new RestaurantObject("Milk", 3, 1, []));
    gameObjectList.push(new RestaurantObject("Flour", 1, 0.5, []));
    gameObjectList.push(new RestaurantObject("Sugar", 1, 0.5, []));
    gameObjectList.push(new RestaurantObject("Egg", 2, 1, []));
}

function loadRecipes() {
    gameObjectList.push(new RestaurantObject("Pancake", 0, 15, [{
        name: "Egg",
        Qty: 2
    }, {
        name: "Milk",
        Qty: 1
    }, {
        name: "Flour",
        Qty: 1
    }]));
}