let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let results = document.querySelector('#results');
let comScore = document.querySelector('#comResults');
let meScore = document.querySelector('#meResults');
let EOG = document.querySelector('#EOG');

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

let compScore = 0;
let myScore = 0;
let times = 0;


rock.addEventListener('click', (() => {
    round("rock");
}));
paper.addEventListener('click', (() => {
    let playerS = paper.value;
    round("paper");
}));
scissors.addEventListener('click', (() => {
    let playerS = scissors.value;
    round("scissors");
}));

function round(playerSelection) {
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
        console.log("You Lose! Rock beats Scissors");
        compScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        console.log("Yay! You Won! Rock beats Scissors");
        myScore += 1;
    }
    else {
        console.log("Its a draw! Play another round");
        times -= 1;
    }

    comScore.textContent = compScore;
    meScore.textContent = myScore;

    times += 1;

    if (compScore >= 5 || myScore >= 5) {
        if (compScore > myScore) {
            console.log("Ooooooof. Sucks to suck man. Computer Wins.");
            results.textContent = "Ooooooof. Sucks to suck man. Computer Wins.";
        } else if (myScore > compScore) {
            console.log("Lets Gooooooooo! You won! You are literally the best.")
            results.textContent = "Lets Gooooooooo! You won! You are literally the best.";
        } else if (myScore == compScore) {
            console.log("No shot. A draw. There Must be some bugs in this.");
            results.textContent = "No shot. A draw. There Must be some bugs in this.";
        }
        else {
            console.log("Um. Okay then.");
            results.textContent = "Um. Okay then.";
        }
        rock.style.visibility = "hidden";
        paper.style.visibility = "hidden";
        scissors.style.visibility = "hidden";

        EOG.textContent = "Please the reload the page to play again.";
    }
}