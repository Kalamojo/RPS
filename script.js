function computerPlay() {
    let number = Math.random() * 3;
    if (number / 2 < 0.75) {
        return "Rock";
    } else if (number / 2 >= 0.75 && number / 2 < 1.25) {
        return "Paper";
    } else {
        return "Scissors";
    }
}



function game() {
    
    let compScore = 0;
    let myScore = 0;

    function round() {
        for (let i = 0; i <= 5; i++) {
            
            let umg = prompt("Rock, paper, or scissors?", "Rock");
            let playerSelection = umg.toLowerCase();
            let computerSelection = computerPlay();
            
            if (playerSelection == "rock" && computerSelection == "Paper") {
                console.log("You Lose! Paper beats Rock");
                compScore += 1;
            } else if (playerSelection == "paper" && computerSelection == "Rock") {
                console.log("Yay! You Won! Paper beats Rock");
                myScore += 1;
            } else if (playerSelection == "paper" && computerSelection == "Scissors") {
                console.log("You Lose! Scissors beats Paper");
                compScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "Paper") {
                console.log("Yay! You Won! Scissors beats Paper");
                myScore += 1;
            } else if (playerSelection == "scissors" && computerSelection == "Rock") {
                console.log("You Lose! Scissors beats Rock");
                compScore += 1;
            } else if (playerSelection == "rock" && computerSelection == "Scissors") {
                console.log("Yay! You Won! Rock beats Scissors");
                myScore += 1;
            }
            else {
                console.log("Its a draw! Play another round");
                i -= 1;
            }
        }

    }
    
    round();

    if (compScore > myScore) {
        console.log("Ooooooof. Sucks to suck man. Computer Wins.");
    } else if (myScore > compScore) {
        console.log("Lets Gooooooooo! You won! You are literally the best.")
    }
    else {
        console.log("Um. Okay then.");
    }

}

game();