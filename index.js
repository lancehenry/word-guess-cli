// Logic for the game

// Create array for the words
// Randomly select a word from array
// After selecting the word, the Word constructor will store it

// Prompt user for each guess

// If right, letter is displayed in word
// If wrong, letter goes into incorrect array
// Guesses remaining decreases after each guess
// What happens when user runs out of guess?
// What happens when user gets the word correct?

var Word = require("./Word");
var Letter = require("./Letter");

var inquirer = require("inquirer");

// Word list
var wordList = ["targaryen", "stark", "martell", "lannister", "baratheon", "tyrell", "arryn", "tully", "greyjoy"];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersGuessed = [];

// User prompt (inquirer - 26-Inquirer_Users from class)
function startGame() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to play a Game of Thrones guessing game?",
            choices: ["Yes", "No"],
            name: "play"
        }
    ]).then(function(user) {
        // console.log("User said: " + user.play + "\n");
        if (user.play == "Yes") {
            console.log("\nLet's Play!\n")
            gamePlay();
        } else {
            console.log("\nWinter has come. Goodbye.\n");
            startGame();
        }
    })
};

function gamePlay() {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    console.log("------------------------------------")
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses Remaining: " + guessesRemaining);
    console.log("------------------------------------\n")
    console.log("Selected word: " + randomWord + "\n");

    var selectedWord = new Word (randomWord);
    selectedWord.splitWord();
    selectedWord.getLetters();

    guessLetter();
};

function guessLetter() {
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter?"
        }
    ]).then(function(answer) {
        console.log("You guessed: " + answer.letter);
    })
}

startGame();