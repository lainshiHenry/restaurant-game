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

function loadPlayer() {
    if (player == null) {
        createNewPlayer();
    } else {
        player = new PlayerObject("Old Player", 10, 500)
    }
    showPlayerDetails();
};

function createNewPlayer() { player = new PlayerObject("Player", 1, 20, []); }

/**** End of Player-related ****/