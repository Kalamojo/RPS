let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let results = document.querySelector('#results');
let comScore = document.querySelector('#comResults');
let meScore = document.querySelector('#meResults');
let EOG = document.querySelector('#EOG');

let yourF = document.querySelector('#yourFacade');
let compF = document.querySelector('#compFacade');

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
        yourF.src = "rock.jpeg";
        yourF.className = "";
        compF.src = "paper.jpg";
        compF.className = "winner";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        console.log("Yay! You Won! Paper beats Rock");
        myScore += 1;
        yourF.src = "paper.jpg";
        yourF.className = "winner";
        compF.src = "rock.jpeg";
        compF.className = "";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        console.log("You Lose! Scissors beats Paper");
        compScore += 1;
        yourF.src = "paper.jpg";
        yourF.className = "";
        compF.src = "scissors.png";
        compF.className = "winner";
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        console.log("Yay! You Won! Scissors beats Paper");
        myScore += 1;
        yourF.src = "scissors.png";
        yourF.className = "winner";
        compF.src = "paper.jpg";
        compF.className = "";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        console.log("You Lose! Rock beats Scissors");
        compScore += 1;
        yourF.src = "scissors.png";
        yourF.className = "";
        compF.src = "rock.jpeg";
        compF.className = "winner";
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        console.log("Yay! You Won! Rock beats Scissors");
        myScore += 1;
        yourF.src = "rock.jpeg";
        yourF.className = "winner";
        compF.src = "scissors.png";
        compF.className = "";
    }
    else {
        console.log("Its a draw! Play another round");
        times -= 1;
        yourF.src = "";
        compF.src = "";
        yourF.className = "";
        compF.className = "";
    }

    comScore.textContent = `Computer Score: ${compScore}`;
    meScore.textContent = `Your Score: ${myScore}`;

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
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";

        EOG.textContent = "Please the reload the page to play again.";
    }
}