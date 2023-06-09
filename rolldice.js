// roll dice game!

let playerScore = 0;
let computerScore = 0;

function getComputerRoll() {
    return Math.floor(Math.random() * 6 + 1)
}




function rollDice() {

    while (playerScore < 3 && computerScore < 3) {
        let playerRoll = Math.floor(Math.random() * 6 + 1);
        let computerRoll = getComputerRoll();

        if (playerRoll === computerRoll) {
            console.log(`It's a tie! Roll again! ${playerScore}:${computerScore}`);
        } else if (playerRoll > computerRoll) {
            playerScore++
            console.log(`Yay, you won this round! ${playerScore}:${computerScore}`);
        } else {
            computerScore++
            console.log(`Boo, you lost this round. ${playerScore}:${computerScore}`);
        }
    }

    if (playerScore > computerScore) {
        console.log('Yay, you won! Congrats!');
    } else {
        console.log('Boo, you lost. Better luck next time.')
    }
}


rollDice();
