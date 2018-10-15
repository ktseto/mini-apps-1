// Matrix vs board:  matrix = state, board = rendered


// Model

// 0 = blank, 1 = player X, 2 = player O
let matrix = [[0,0,0],[0,0,0],[0,0,0]];
let currentPlayer = 1;
const isGameEnded = false;
const playerMap = {0: '&nbsp', 1: 'X', 2: 'O'};

const togglePlayer = () => {
  // changes currentPlayer to the next
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

const updateMatrix = (row, column) => {
  // update board based on row, column
  matrix[row][column] = currentPlayer;
}

const resetGame = () => {
  // resets board to all blanks
  matrix = [[0,0,0],[0,0,0],[0,0,0]];
  currentPlayer = 1;
  isGameEnded = false;
}

const isWinnerFound = () => {
  // checks the board for a winner; returns true/false
}




// View/Controller

const handleReset = (e) => {
  resetGame();
  renderBoard();
  renderMessage();
}

const handleClick = (e) => {
  // if target is blank and game has not ended:
    // update matrix based on target and current player
    // if there's a winner:
      // set isGameEnded = true
    // else:
      // toggle to next player
  // renders new board
  // renders new message
}

const renderBoard = () => {
  // renders DOM based on current state of the matrix
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      document.getElementById(`r${r}c${c}`).innerHTML = `&nbsp&nbsp${playerMap[matrix[r][c]]}&nbsp&nbsp`;
    }
  }
}

const renderMessage = () => {
  // if game has ended:
    // show winner, game ended
  // else:
    // show whose turn it is
  if (isGameEnded) {
    document.getElementById('message').innerText = `You won, player ${playerMap[currentPlayer]}!`;
  } else {
    document.getElementById('message').innerText = `Make a move, player ${playerMap[currentPlayer]}!`;
  }
}


// Initialization
renderMessage();
renderBoard();