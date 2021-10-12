// GUESS THAT NUMBER

// Message that will be used throughout the project.
const enterNumText = `Please Enter A Number Greater Than Zero`;

// For restarting the game.
let restartGame = true;

// Used to store the range of the random number to be created/guessed.
let rangeNum;

// For storing the random number to be guessed.
let randomNum;

// For storing the number of guessing attempts the player has left.
let attempts;

// For storing the player's guessed number.
let guess;

// For storing the player's response to play or not play again.
let playAgain;

//
alert(`Welcome To "GUESS THAT NUMBER!" Please Click "OK" To Start the Game.`);

// Game restarts as long as restartGame has a value = true.
while(restartGame){
    // Asks The Player to Enter A Number To Set The Upper Bound For The Random Number That Will Be Created (AKA Number To Be Guessed).
    rangeNum = prompt(`Please Enter A Maximum Number For The Range`);

    // Using parseInt to attempt to convert the player's response into a number value.
    rangeNum = parseInt(rangeNum);
    
    //
while (!rangeNum || rangeNum < 1){
    rangeNum = prompt(enterNumText);
    rangeNum = parseInt(rangeNum);
}

    break;
}