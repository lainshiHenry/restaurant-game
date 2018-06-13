/**** Player-related ****/
function showPlayerDetails() {
    $("#playerName").text(player.name);
    $("#playerMoney").text(player.money);
    $("#playerInventory").html(showPlayerInventoryDetails(player));
}

function showPlayerInventoryDetails(player) {
    let result = "<ul>";

    for (let i = 0; i < player.inventory.length; i++) {
        result += "<li>" + player.inventory[i].item.name + ", " + player.inventory[i].quantity + "</li>";
    }

    return result += "</ul>";
}

function loadPlayer(playerName) {
    if (player == null) {
        createNewPlayer(playerName);
    } else {
        player = new PlayerObject("Old Player", 10, 500)
    }
    showPlayerDetails();
};

function createNewPlayer(playerName) { player = new PlayerObject(playerName, 1, 20, []); }

/**** End of Player-related ****/