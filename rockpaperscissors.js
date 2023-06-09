//rock, paper, scissors game!


const readline = require('readline');
let rl = readline.createInterface(
    process.stdin, process.stdout
);


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];

}

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;


function playGame(playerSelection) {

    while (playerScore < 3 && computerScore < 3) {
        let computerSelection = getComputerChoice();
        if (playerSelection === computerSelection) {
            console.log(`It's a tie! ${playerScore}:${computerScore}`);
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
            console.log(`Player won! Computer lost! ${playerScore}:${computerScore}`);
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
            console.log(`Player won! Computer lost! ${playerScore}:${computerScore}`);
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            console.log(`Player won! Computer lost! ${playerScore}:${computerScore}`);
        } else {
            computerScore += 1;
            console.log(`Computer won! Player lost! ${playerScore}:${computerScore}`);
        }

    }

    if (playerScore === 3) {
        console.log("Congrats, player! You won!");
    } else {
        console.log("The computer won, boooo. Better luck next time!");
    }

}


rl.question('Welcome to the rock, paper, scissors game! What would you like to play? ', (choice) => {
    playerSelection = choice;
    rl.close();
    playGame(playerSelection);
});



