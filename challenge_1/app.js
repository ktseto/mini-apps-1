// ******* Model ********

// 0 = blank, 1 = player X, 2 = player O
let matrix = [[0,0,0],[0,0,0],[0,0,0]];
let currentPlayer = 1;
let movesLeft = 9;
let isGameEnded = false;
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
  movesLeft = 9;
  isGameEnded = false;
}

const isWinnerFound = () => {
  // checks the board for a winner; returns true/false
  // there are only 8 ways to win: 3 rows, 3 columns, 2 diagonals
  // just check all of them
  const M = matrix;

  // check all rows
  for (let r = 0; r < 3; r++) {
    if (M[r][0] === M[r][1] && M[r][0] === M[r][2] && M[r][0] !== 0) {
      return true;
    }
  }

  // check all columns
  for (let c = 0; c < 3; c++) {
    if (M[0][c] === M[1][c] && M[0][c] === M[2][c] && M[0][c] !== 0) {
      return true;
    }
  }

  // diagonal 1
  if (M[0][0] === M[1][1] && M[0][0] === M[2][2] && M[0][0] !== 0) {
    return true;
  }

  // diagonal 2
  if (M[0][2] === M[1][1] && M[1][1] === M[2][0] && M[0][2] !== 0) {
    return true;
  }

  return false;
}


// ************ View/Controller ***************

const handleReset = (e) => {
  resetGame();
  renderBoard();
  renderMessage();
}


// event.target is a jQuery thing!
const handleClick = (elem) => {
  const blank = Array(5).fill(String.fromCharCode(160)).join('');

  if (elem.innerText === blank && !isGameEnded) {
    movesLeft--;
    const row = elem.id[1];
    const col = elem.id[3];
    matrix[row][col] = currentPlayer;

    if (movesLeft === 0 || isWinnerFound()) {
      isGameEnded = true;
    } else {
      togglePlayer();
    }

    renderBoard();
    renderMessage();
  }
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
  if (isGameEnded) {
    if (isWinnerFound()) {
      document.getElementById('message').innerText = `You won, player ${playerMap[currentPlayer]}!`;
    } else {
      document.getElementById('message').innerText = 'It\'s a draw!';
    }
  } else {
    document.getElementById('message').innerText = `Make a move, player ${playerMap[currentPlayer]}!`;
  }
}


// ********** Initialization **************
renderMessage();
renderBoard();