// Constructor called Letter

// This constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed
// A function that returns the underlying character or placeholder
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if guessed correctly

var Letter = function(character) {

    this.character = character;
    this.characterCorrect = false;
    
    this.showCharacter = function() {
        if (this.characterCorrect) {
            console.log(this.character);
        } else {
            console.log("_");
        }
    };
};

module.exports = Letter;

// Test the constructor
// var test = new Letter("a");
// test.showCharacter();