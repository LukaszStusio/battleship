

var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (!isSunk) {
  //alert("test");
    guess = prompt("Ready, steady, fire! (choose the number from 0 to 6):");
    if (guess<0 || guess>6 || guess == null){
        alert("Please choose the correct number of cell!");
    }else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!!!");
            hits = hits + 1;

            // if (guess == location1){
            //     alert("Hit!!!");
            //     hits = hits +1;
            //     location1 = "You've already destroyed this part! Try again in different part.";
            // }

            if (hits == 3) {
                isSunk = true;
                alert("You've just sunk my battleship! I hate you!");
            }
        }else {
            alert("Missed!");
        }
    }
}

var stats = "You needed " + guesses + " hits to put my battleship in the bottom of the ocean, " + "so your efficiency is: " + (3/guesses) + ".";

alert(stats);
