/**** Data ****/
function displayStore() {
    var result;

    return result;
}



function loadIngredients() {
    gameObjectList.push(new RestaurantObject("Milk", 3, 1, []));
    gameObjectList.push(new RestaurantObject("Flour", 1, 0.5, []));
    gameObjectList.push(new RestaurantObject("Sugar", 1, 0, []));
    gameObjectList.push(new RestaurantObject("Salt", 1, 0, []));
    gameObjectList.push(new RestaurantObject("Butter", 3, 1, []));
    gameObjectList.push(new RestaurantObject("Egg", 2, 0.5, []));
    gameObjectList.push(new RestaurantObject("Rice", 2, 1, []));
    gameObjectList.push(new RestaurantObject("Corn", 2, 0, []));
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
    gameObjectList.push(new RestaurantObject("Tortilla", 0, 8, [{
        name: "Salt",
        Qty: 2
    }, {
        name: "Flour",
        Qty: 1
    }]));
}