function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];

}

let playerScore = 0;
let computerScore = 0;


function playGame() {

    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = "rock";
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




playGame();
