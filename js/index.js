/**** Game Global Variables ****/
var timer;
var player = null;
var gameObjectList = [];
/**** End of Game Global Variables ****/

/**** Init ****/
function loadData(playerName) {
    loadIngredients();
    displayStore();
    loadRecipes();
    displayRecipes();
    loadPlayer(playerName);


}
/**** End of Init ****/

/**** Money-related functions ****/
function addMoney(player, amount) { player.money += amount; }

function removeMoney(player, amount) { if (checkMoney(player.money, amount)) { player.money -= amount; } }

function checkMoney(playerMoney, requiredMoney) {
    return (playerMoney > 0 && playerMoney >= requiredMoney);
}

/**** End of Money-related functions ****/

/**** Selling ****/
function sellItem(player, item) {
    let sellQuantity = 1;
    eventMessage("Selling Item");
    debugger;
    let isExistPosition = checkIfItemExists(player, item);
    eventMessage("Checking for Item");
    if (isExistPosition < 0) {
        eventMessage("Insufficient Quantity");
    } else {
        updateItem(player, item, sellQuantity, "sell");
        addMoney(player, item.sellPrice);
        eventMessage("Sold " + sellQuantity + " " + item.name + " for " + item.sellPrice + " coins!");
    }
}
/**** End of Selling ****/

/**** Buying ****/
function buyItem(player, item) {
    let buyQuantity = 1;
    eventMessage("Buying Item");
    if (checkMoney(player.money, item.buyPrice)) {
        eventMessage("Checking for Item");
        updateItem(player, item, 1, "buy");
        removeMoney(player, item.buyPrice);
        eventMessage("Bought " + buyQuantity + " " + item.name + " for " + item.buyPrice + " coins!");
    } else {
        eventMessage("Not enough money!");
    }
}
/**** End of Buying ****/

function createRecipe(player, recipe) {
    let makeQuantity = 1;
    eventMessage("Creating Recipe");
    let isSufficientQuantity = true;

    for (let i = 0; i < recipe.ingredients.length; i++) {
        if (checkIfSufficientQuantity(player, recipe.ingredients[i], recipe.ingredients[i].Qty) < 0) {
            isSufficientQuantity = false;
        }
    }
    if (isSufficientQuantity) {
        for (let i = 0; i < recipe.ingredients.length; i++) {
            updateItem(player, readItem(recipe.ingredients[i].name), recipe.ingredients[i].Qty, "sell");
        }
        updateItem(player, readItem(recipe.name), makeQuantity, "buy");
        eventMessage("Made " + makeQuantity + " " + recipe.name + "!");
    } else { eventMessage("Insufficient Quantity"); }


}

function checkIfItemExists(player, item) {
    let result = -1;

    for (let i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i].item.name === item.name) { result = i; }
    }
    return result;
}

function checkIfSufficientQuantity(player, item, requiredQuantity) {
    let result = checkIfItemExists(player, item);

    if (result >= 0) {
        if (player.inventory[result].quantity >= requiredQuantity) { result = result; } else {
            result = -1;
            eventMessage("Insufficient quantity");
        }
    }
    return result;
}

function checkIfItemNameExists(player, itemName) {
    let result = -1;

    for (let i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i].item.name === itemName) { result = i; }
    }
    return result;
}