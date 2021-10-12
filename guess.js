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
while (restartGame) {
    // Asks The Player to Enter A Number To Set The Upper Bound For The Random Number That Will Be Created (AKA Number To Be Guessed).
    rangeNum = prompt(`Please Enter A Maximum Number For The Range`);

    // Using parseInt to attempt to convert the player's response into a number value. If the value cannot be converted then the value returned will be NaN (Not A Number).
    rangeNum = parseInt(rangeNum);

    // Verifies the player's entry for hte ranged number is a number greater than zero (NOTE: NaN has a default boolean value of false. Also, all numbers both positive/negative, have a default boolean value of true, except for zero which has a boolean value of false).
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    //Creates the random number (AKAA the number to be guessed by the player) using the range number entered by the player.
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts player to enter a number of attempts allowed. Also, attempting to convert their response into a number value.
    attempts = parseInt(prompt(`Please Enter A Number of Attemps Allowed`));

    // Verifies the player's entry for a number of attempts allowed is a number great than zero
    while (!attempts || attempts < 1) {
        attempts = parseInt(prompt(enterNumText));
    }

    // Asks Player to enter a guess in the range that they set.
    guess = prompt(`Please Enter A Guess Between From 1 to ${rangeNum}. You Have ${attempts} Attempts Left`);

    // Continues looping until the player guesses the correct number or runs out of attempts (NOTE" Loops until a BREAK keyword is run).
    while (true) {

        // Attempts to convert the player's guess into a number
        guess = parseInt(guess);

        //
        while (!guess || guess < 1 || guess > rangeNum) {
            // Verifies the player's guess is a number greater than zero as well as a number in the range set by the player.
            guess = parseInt(prompt(`PLease Enter A number From 1 to ${rangeNum}`));
        }


        // Removes an attempt
        attempts--;

        // Checks to see if the player guessed the correct number, if so the game ends.
        if (guess === randomNum) {
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;
        }

        // Checks if the player has any attempts left. if not, the game ends and the number is displayed to the player.
        else if (attempts === 0) {
            alert(`Sorry, But You Have Run Out of Attempt(s) :(. The Number Was ${randomNum}`);
            break;
        } else if (guess < randomNum){
            guess = prompt(`Too Low. You have ${attempts} Attempt(s) Left`);
        } 
        // The only other possibility is that the player's guess was too high so the player is prompted to guess again.
        else {
            guess = prompt(`Too High. You have ${attempts} Attempt(s) Left`);
        }
    }
}


