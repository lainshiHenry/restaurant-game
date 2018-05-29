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

function InventoryObject(playerInventory, item) {
   this.item = item;
   this.quantity = 0;
}
/**** End of Constructors ****/

/**** Player-related ****/
function showPlayerDetails() {
   $("#playerName").text(player.name);
   $("#playerMoney").text(player.money);
   $("#playerInventory").html(showPlayerInventoryDetails(player.inventory));
   //$("#recipeList").text(recipesList);
}

function showPlayerInventoryDetails(playerInventory) {
   let result = "<ul>";
   
   for(let i = 0; i < playerInventory.length; i++) {
      result += "<li>" + playerInventory[i].item.name + ", " + playerInventory[i].quantity + "</li>";   
   }
   
   result += "</ul>";
   return result;
}

/*function showPlayerRecipeDetails(playerRecipe) {
   let result = "<ul>";
   
   for(let i = 0; i < playerInventory.length; i++) {
      result += "<li>" + playerRecipe[i].name + ", " + playerRecipe[i].quantity + "</li>";
   }
   
   result += "</ul>";
   return result;
}*/

function loadPlayer() {
   if (player == null) {
      createNewPlayer();
   } else {
      player = new PlayerObject("Old Player", 10, 500)
   }
   showPlayerDetails();
};

function createNewPlayer() { player = new PlayerObject("Player", 1, 20, [], []);
}

/**** End of Player-related ****/

/**** Actionable functions ****/
function addQuantity() {}
function removeQuantity() {}
function addMoney(player, amount) { player.money += amount; }
function removeMoney(player, amount) { if(checkMoney(player.money, amount)) {player.money -= amount;}}

function checkMoney(playerMoney, requiredMoney) {
   return (playerMoney > 0 && playerMoney >= requiredMoney);
}

/**** End of Actionable functions ****/

function loadIngredients() {
   ingredientsList.push(new RestaurantObject("Milk", 3, 1, []));
   ingredientsList.push(new RestaurantObject("Flour", 1, 0.5, []));
}

function loadRecipes() {
   recipesList.push(new RestaurantObject("Pancake", 1, 0, ["Egg", "Milk", "Butter"]));
}

/* Checks Functions */
function checkQuantity(playerInventory, itemName, requiredQuanity) {
   let result = false;
   
//    for(let i = 0; i < playerInventory; i++) {
//       if( playerInventory[i].name === itemName ) {
         
//       }
//    }
   return result = true; //debugging purposes
}

function checkIfItemExists(player, item) {
   let result = false;
   debugger;
   for( let i = 0; i < player.inventory.length; i++ ) {
      if( player.inventory[i].item.name === item.name ) { result = true; }
   }
   return result;
}
/**** End of Checks Functions ****/

/**** Retrival Functions ****/
/**** End of Retrival Functions ****/

/**** Selling ****/
function sellItem( player, item ) {
   eventMessage("Selling Item");
   eventMessage("Checking for Item");
   debugger;
   if( checkIfItemExists(player, item ) ) {
      console.log("Exists");
   }
      for(let i = 0; i < player.inventory.length; i++) {
         eventMessage("Checking for Item");
         if( player.inventory[i].item.name === item.name ) {
            player.inventory[i].quantity--;
            player.money += item.sellPrice;
            eventMessage("Item Sold");
         }
      }
}
/**** End of Selling ****/

/**** Buying ****/
function buyItem( player, item ) {
   let isExists = false;
   eventMessage("Buying Item");
   if( checkMoney(player.money, item.buyPrice) ){
      eventMessage("Checking for Item");
      for(let i = 0; i < player.inventory.length; i++) {
         if( player.inventory[i].item.name === item.name ) {
            removeMoney(player, item.buyPrice);
            player.inventory[i].quantity++;
            isExists = true;
         }
      }
      if(!isExists) { 
         player.inventory.push(new InventoryObject(player.inventory, item));
         player.inventory[player.inventory.length - 1].quantity = 1;
      }
      eventMessage("Item Bought");
   } else {
      eventMessage("Not enough money!");
   }
}
/**** End of Buying ****/