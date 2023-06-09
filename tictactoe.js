//Tic-tac-toe game!

const players = ['O', 'X'];

const gameBoard = ['', '', '', '', '', '', '', '', ''];

let currentPlayer;
let gameBoardElement;


const createTitle = (title) => {
    const h1Element = document.createElement('h1');
    h1Element.textContent = title;
    document.body.appendChild(h1Element);
}



