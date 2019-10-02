var answer = ["zelda", "pac-man", "mario", "star-fox", "kirby", "sonic","mega-man", "donkey-kong", "spyro"];
var wins = 0;
var losses = 0;
var maxNumberGuesses = 10;
var lettersGuessed = [];
var answerArray = [];
var finished = false;

// console.log(answer.length);


// var directionText = document.getElementById("direction-text");
// var userChoiceText = document.getElementById("userchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossText = document.getElementById("loss-text");

document.onkeyup = function() {


    var userGuess = event.key;
        // console.log(userGuess);

    var computerChoice = answer[Math.floor(Math.random() * answer.length)];

        if (userGuess.includes(answer)) {

        if (userGuess.includes(answer)) {
            userChoiceText++;
        }else {
            lossText++;
        }

        directionText.textContent = "";


        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer Chose: " + computerChoice;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;

    }

    
    


};




    
    