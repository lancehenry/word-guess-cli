// Constructor called Word

// This Constructor should define:

// An array of 'new' Letter objects representing the letter of the underlying word
// A function that returns a string representing the word
// A function that takes a character as an argument and calls the guess function

var Letter = require("./Letter");

var Word = function(newWord) {

    this.newWord = newWord;
    this.letters = [];

    this.splitWord = function() {
        this.letters = this.newWord.split(",");
        console.log(this.letters);
    }

    this.getLetters = function() {
        for (var i = 0; i < this.newWord.length; i++) {
            var selectedWord = new Letter(this.letters[i]);
            selectedWord.showCharacter();
        }
    }
};

module.exports = Word;

// Test the constructor
// var test = new Word("Winterfell");
// test.splitWord();
// test.getLetters();