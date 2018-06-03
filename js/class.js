/**** Constructors ****/
function PlayerObject(name, level, money, inventory) {
    this.name = name;
    this.level = level;
    this.money = money;
    this.inventory = inventory;
};

function RestaurantObject(name, buyPrice, sellPrice, ingredients) {
    this.name = name;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.ingredients = ingredients;
};

function InventoryObject(item) {
    this.item = item;
    this.quantity = 0;
}
/**** End of Constructors ****/