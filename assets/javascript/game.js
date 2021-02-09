var computerChoices = ["a", "b", "c", "d", "e", "f",
             "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
             "s", "t", "u", "v", "w", "x", "y", "z"];
        //var computerChoices = ["a"];

        var userGuesses = [];
        var wins = 0;
        var losses = 0;
        var computerGuess;
    
        var userChoiceText = document.getElementById("userchoice-text");
        var computerChoiceText = document.getElementById("computerchoice-text");
        var winsText = document.getElementById("noOfWins");
        var lossesText = document.getElementById("noOfLosses");
        var guessLeftText = document.getElementById("guessLeft");

        function reset() {
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                console.log("computerGuess: " + computerGuess);
                guessLeft = 9;
                userChoiceText.textContent = "Your Guesses so far:  ";
                userGuesses = [];
            }
        
        document.onkeyup = function (event) {

            var userGuess = event.key;
            
            if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c" || (userGuess === "d") || (userGuess === "e")
                || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j")
                || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o")
                || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t")
                || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x")) || (userGuess === "y")
                || (userGuess === "z")) {

                if (userGuess === computerGuess) {
                    wins++;
                    reset();
                } 
                else{
                if(userGuesses.length==0){
                    userGuesses.push(userGuess);
                    userChoiceText.append(userGuess +", ");
                    guessLeft--;
                }
                else{

                if(userGuesses.includes(userGuess)){
                
                }
                else{
                    userGuesses.push(userGuess);
                    userChoiceText.append(userGuess +", ");
                    guessLeft--;
                }
                }
                }

                if(guessLeft === 0){
                    losses++;
                    userGuess = '';
                    reset();
                }                
                
                winsText.textContent = "Wins: " + wins;
                lossesText.textContent = "Losses: " + losses;
                guessLeftText.textContent = "Guesses Left:" + guessLeft;
            }
        };
        
        reset();