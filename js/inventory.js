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
   } else if (action === "make") {
   } else {
      if (action === "buy") { 
         player.inventory[position].quantity += quantity;
      } else if (action === "sell" && player.inventory[position].quantity >= quantity) {
         player.inventory[position].quantity -= quantity;
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