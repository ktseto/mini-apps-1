// Matrix vs board:  matrix = state, board = rendered


// Model

// 0 = blank, 1 = player X, 2 = player O
const matrix = [[0,0,0],[0,0,0],[0,0,0]];

let currentPlayer = 1;

const isGameEnded = false;

const togglePlayer = () => {
  // changes currentPlayer to the next
}

const updateMatrix = (row, column) {
  // update board based on row, column
}

const resetMatrix = () {
  // resets board to all blanks
}

const isWinnerFound = () {
  // checks the board for a winner; returns true/false
}




// View/Controller

const handleReset = (e) => {
  // updates matrix
  // calls renderBoard
  // calls renderMessage
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
}

const renderMessage = () => {
  // if game has ended:
    // show winner, game ended
  // else:
    // show whose turn it is
}
