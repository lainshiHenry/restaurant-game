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