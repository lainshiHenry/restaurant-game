/**** Events ****/
$(document).ready(function() {
    //loadData(prompt("Enter in your Player name?"));
    loadData("Player");
    timer = setInterval(showPlayerDetails, 100);
    eventMessage("Successfully loaded.");

    $(".buy").click(function() { buyItem(player, readItem($(this).attr("value"))); });
    $(".sell").click(function() { sellItem(player, readItem($(this).attr("value"))); });
    $(".make").click(function() { createRecipe(player, readItem($(this).attr("value"))); });
});



/* Event Message */
function eventMessage(message) { $("#messages").text(message); }
/**** End of Events ****/