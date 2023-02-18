// --------nested if else

// winning number
// 19 your guess is right
// 17 to low
// 20 to high

let winningNumber = 19;
let userGuess = +prompt("guess a number");

if (userGuess === winningNumber) {
    console.log("your guess is right");
} else {
    if (userGuess < winningNumber) {
        console.log("your guess is to low");
    } else {
        console.log("your guess is high")
    }
}