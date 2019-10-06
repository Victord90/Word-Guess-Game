var answer = ["zelda", "pac-man", "mario", "star-fox", "kirby", "sonic","mega-man", "donkey-kong", "spyro"];
var wins = 0;
var losses = 0;
var maxGuesses = 10;
var lettersGuessed = [];
var answerArray = [];
var finished = false;
var computerChoice = [];
var guessesRemaining = 0;
var letterRemaining = [];


    function start () {


    computerChoice = answer[Math.floor(Math.random() * answer.length)];


    answerArray = [];
      


    for (var i = 0; i < computerChoice.length; i++) {
        answerArray = [i] = "_";
        
    }

    letterRemaining = answer.length;
    



     guessesRemaining = maxGuesses;
     lettersGuessed = [];
     console.log(answer.length)
     
     
    update()
};




    function update () {



         var directionText = document.getElementById("direction-text");
         var userChoiceText = document.getElementById("userchoice-text");
         var winsText = document.getElementById("wins-text");
         var lossText = document.getElementById("loss-text");



         directionText.textContent = "";


         userChoiceText.textContent = "You chose: " + userGuess;
         computerChoiceText.textContent = "The computer Chose: " + computerChoice;
         winsText.textContent = "wins: " + wins;
         lossesText.textContent = "losses: " + losses;

         
        

     };

    
    
   





    
    