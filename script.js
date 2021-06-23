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
console.log(computerPlay());