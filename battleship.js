var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var = hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, steady, fire! (choose the number from 0 to 6):");
    if (guess<0 || guess>6){
        alert("Please choose the correct number of cell!");
    }else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
        }
    }
}
