
var cardHTML = document.getElementById("card");
var scoreHTML = document.getElementById("score");
var resultHTML = document.getElementById("result");

var possibleCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var previousCard = 0;
var randomNumber = 0;

var numQuestionsAsked = 0;
var numCorrect = 0;


function resetCardGame(){
    previousCard = generateCard();
    cardHTML.innerText = previousCard; 

    resultHTML.innerText = "You were: ";
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
}

function submitGuess(highLowGuess){
    var newCard = generateCard();
    var correctGuess = guessCard(highLowGuess, newCard);