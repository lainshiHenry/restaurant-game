/**** Game Global Variables ****/
var timer;
var player = null;
var ingredientsList = [];
var recipesList = [];
/**** End of Game Global Variables ****/

/**** Events ****/
$(document).ready(function() {
   loadData();
   timer = setInterval(showPlayerDetails, 100);
   eventMessage("Successfully loaded.");
});

$("#sellMilk").click(function() { sellItem(player, ingredientsList[0]); });
$("#buyMilk").click(function() { buyItem(player, ingredientsList[0]); });
$("#sellFlour").click(function() { sellItem(player, ingredientsList[1]); });
$("#buyFlour").click(function() { buyItem(player, ingredientsList[1]); });


/* Event Message */
function eventMessage (message) { $("#messages").text(message); }
/**** End of Events ****/

/**** Init ****/
function loadData() {
   loadIngredients();
   loadRecipes();
   loadPlayer();
}
/**** End of Init ****/

/**** Constructors ****/
function PlayerObject(name, level, money, inventory, recipe) {
   this.name = name;
   this.level = level;
   this.money = money;
   this.inventory = inventory;
   this.recipe = recipe;
};

function RestaurantObject(name, buyPrice, sellPrice, recipe) {
   this.name = name;
   this.buyPrice = buyPrice;
   this.sellPrice = sellPrice;
   this.recipe = recipe;
};

function InventoryObject(item) {
   this.item = item;
   this.quantity = 0;
}
/**** End of Constructors ****/

/**** Player-related ****/
function showPlayerDetails() {
   $("#playerName").text(player.name);
   $("#playerMoney").text(player.money);
   $("#playerInventory").html(showPlayerInventoryDetails(player));
   //$("#recipeList").text(recipesList);
}

function showPlayerInventoryDetails(player) {
   let result = "<ul>";
   
   for(let i = 0; i < player.inventory.length; i++) {
      result += "<li>" + player.inventory[i].item.name + ", " + player.inventory[i].quantity + "</li>"; 
   }
   
   return result += "</ul>";
}

/*function showPlayerRecipeDetails(player) {
   let result = "<ul>";
   
   for(let i = 0; i < playerInventory.length; i++) {
      result += "<li>" + playerInventory[i].item.name + ", " + playerInventory[i].quantity + "</li>"; 
   }
   
   return result += "</ul>";
}*/

function loadPlayer() {
   if (player == null) {
      createNewPlayer();
   } else {
      player = new PlayerObject("Old Player", 10, 500)
   }
   showPlayerDetails();
};

function createNewPlayer() { player = new PlayerObject("Player", 1, 20, [], []); }

/**** End of Player-related ****/

/**** Money-related functions ****/
function addMoney(player, amount) { player.money += amount; }
function removeMoney(player, amount) { if(checkMoney(player.money, amount)) {player.money -= amount;}}

function checkMoney(playerMoney, requiredMoney) {
   return (playerMoney > 0 && playerMoney >= requiredMoney);
}

/**** End of Money-related functions ****/

/**** Selling ****/
function sellItem( player, item ) {
   eventMessage("Selling Item");
   let isExistPosition = checkIfItemExists(player, item);
   eventMessage("Checking for Item");
   if( isExistPosition < 0 ) { 
      eventMessage("Insufficient Quantity");
   } else {
      updateItem(player, item, 1, "sell");
      eventMessage("Item Sold");
   }
}
/**** End of Selling ****/

/**** Buying ****/
function buyItem( player, item ) {
   eventMessage("Buying Item");
   if( checkMoney(player.money, item.buyPrice) ){
      eventMessage("Checking for Item");
      updateItem( player, item, 1, "buy");
      eventMessage("Item Bought");
   } else {
      eventMessage("Not enough money!");
   }
}
/**** End of Buying ****/

function checkIfItemExists(player, item) {
   let result = -1;
   
   for( let i = 0; i < player.inventory.length; i++ ) {
      if( player.inventory[i].item.name === item.name ) { result = i; }
   }
   return result;
}

/**** Inventory Management ****/
/* Create, Read, Update, Delete, Check */

function readInventory(player) {
   console.log(player.inventory);
}

function createItem(player, item) {
   if( checkIfItemExists(player, item) ) {
      player.inventory.push(new InventoryObject(item));
   }
}

function updateItem(player, item, quantity, action) {
   let position = checkIfItemExists(player, item);
   if( position < 0 ) {
      createItem(player, item);
      updateItem(player, item, 1, "buy");
   } else {
      if (action === "buy") { 
         player.inventory[position].quantity += quantity;
         removeMoney(player, item.buyPrice);
      } else if (action === "sell" && player.inventory[position].quantity >= quantity) {
         player.inventory[position].quantity -= quantity;
         addMoney(player, item.sellPrice);
         deleteItem(player, item);
      } else {
         eventMessage("Neither buy or sell");
      }     
   }
}

function deleteItem(player, item) {
   let position = checkIfItemExists(player, item);
   if( position >= 0 && player.inventory[position].quantity === 0) {
      player.inventory.splice(position, 1);
   }
}



/**** End of Inventory Management ****/



/**** Data ****/
function loadIngredients() {
   ingredientsList.push(new RestaurantObject("Milk", 3, 1, []));
   ingredientsList.push(new RestaurantObject("Flour", 1, 0.5, []));
}

function loadRecipes() {
   recipesList.push(new RestaurantObject("Pancake", 1, 0, ["Egg", "Milk", "Butter"]));
}