/**** Events ****/
$(document).ready(function() {
   loadData();
   timer = setInterval(showPlayerDetails, 100);
   eventMessage("Successfully loaded.");
});

$("#sellMilk").click(function() { sellItem(player, ingredientsList[0]); console.log($("#sellMilk").attr("value")); });
$("#buyMilk").click(function() { buyItem(player, ingredientsList[0]); });
$("#sellFlour").click(function() { sellItem(player, ingredientsList[1]); });
$("#buyFlour").click(function() { buyItem(player, ingredientsList[1]); });
$("#buySugar").click(function() { buyItem(player, ingredientsList[2]); });
$("#sellSugar").click(function() { buyItem(player, ingredientsList[2]); });
$("#makePancake").click(function() { createRecipe(player, recipeList[0], 1); });



/* Event Message */
function eventMessage (message) { $("#messages").text(message); }
/**** End of Events ****/