/**** Data ****/
function displayStore() {
    let result = "";

    for (let i = 0; i < gameObjectList.length; i++) {
        result += "<div><button class='buy' value='" + gameObjectList[i].name + "'>Buy " + gameObjectList[i].name + "</button><button class='sell' value='" + gameObjectList[i].name + "'>Sell " + gameObjectList[i].name + "</button></div>"
    }
    $("#ingredientMarketplace").html(result);
}

function displayRecipes() {
    let result = "";

    /*for (let i = 0; i < gameObjectList.length; i++) {
        result += "<div><button class='buy' value='" + gameObjectList[i].name + "'>Buy " + gameObjectList[i].name + "</button><button class='sell' value='" + gameObjectList[i].name + "'>Sell " + gameObjectList[i].name + "</button></div>"
    }*/
    result += "<div><button class='make' value='" + gameObjectList[8].name + "'>Make " + gameObjectList[8].name + "</button><button class='sell' value='" + gameObjectList[8].name + "'>Sell " + gameObjectList[8].name + "</button></div>"

    result += "<div><button class='make' value='" + gameObjectList[9].name + "'>Make " + gameObjectList[9].name + "</button><button class='sell' value='" + gameObjectList[9].name + "'>Sell " + gameObjectList[9].name + "</button></div>"

    $("#recipeMarketplace").html(result);
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