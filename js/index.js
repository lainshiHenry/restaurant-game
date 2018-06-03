/**** Game Global Variables ****/
var timer;
var player = null;
var gameObjectList = [];
/**** End of Game Global Variables ****/

/**** Init ****/
function loadData() {
    loadIngredients();
    loadRecipes();
    loadPlayer();
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
    eventMessage("Selling Item");
    debugger;
    let isExistPosition = checkIfItemExists(player, item);
    eventMessage("Checking for Item");
    if (isExistPosition < 0) {
        eventMessage("Insufficient Quantity");
    } else {
        updateItem(player, item, 1, "sell");
        addMoney(player, item.sellPrice);
        eventMessage("Item Sold");
    }
}
/**** End of Selling ****/

/**** Buying ****/
function buyItem(player, item) {
    eventMessage("Buying Item");
    if (checkMoney(player.money, item.buyPrice)) {
        eventMessage("Checking for Item");
        updateItem(player, item, 1, "buy");
        removeMoney(player, item.buyPrice);
        eventMessage("Item Bought");
    } else {
        eventMessage("Not enough money!");
    }
}
/**** End of Buying ****/

function createRecipe(player, recipe, quantity) {
    eventMessage("Creating Recipe");
    let isSufficientQuantity = true;
    console.log(recipe);

    for (let i = 0; i < recipe.ingredients.length; i++) {
        // Check for quantity
        updateItem(player, readItem(recipe.ingredients[i].name), recipe.ingredients[i].Qty, "sell");
    }

    updateItem(player, readItem(recipe.name), 1, "buy");
}

function checkIfItemExists(player, item) {
    let result = -1;

    for (let i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i].item.name === item.name) { result = i; }
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