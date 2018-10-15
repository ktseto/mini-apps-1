// ******* Model ********

const state = {
  // 0 = blank, 1 = player X, 2 = player O
  matrix: [[0,0,0],[0,0,0],[0,0,0]],
  currentPlayer: 1,
  movesLeft: 9,
  isGameEnded: false,
  lastWinner: 1,
  tally: {1: 0, 2: 0},
  playerMap: {0: '&nbsp', 1: 'X', 2: 'O'},
  playerXName: 'X',
  playerOName: 'O',

  togglePlayer: function () {
    // changes state.currentPlayer to the next
    state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
  },

  updateMatrix: function (row, column) {
    // update board based on row, column
    state.matrix[row][column] = state.currentPlayer;
  },

  resetBoard: function () {
    state.matrix = [[0,0,0],[0,0,0],[0,0,0]];
    state.movesLeft = 9;
    state.isGameEnded = false;
    state.currentPlayer = state.lastWinner;
  },

  resetGame: function () {
    state.resetBoard();
    state.currentPlayer = 1;
    state.lastWinner = 1;
    state.tally = {1: 0, 2: 0};
  },

  isWinnerFound: function () {
    // checks the board for a winner; returns true/false
    // there are only 8 ways to win: 3 rows, 3 columns, 2 diagonals
    // just check all of them
    const M = state.matrix;

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
  },
}

// ************ View/Controller ***************

const input = {
  getNames: function () {
    state.playerXName = window.prompt('Player X, please enter your name:');
    state.playerOName = window.prompt('Player O, please enter your name:');
  },

  handleReset: function (e) {
    document.getElementById('next').classList.add('hidden');
    state.resetGame();
    render.renderBoard();
    render.renderMessage();
    render.renderTally();
  },

  handleNextRound: function () {
    document.getElementById('next').classList.add('hidden');
    state.resetBoard();
    render.renderBoard();
    render.renderMessage();
  },

  // event.target is a jQuery thing!
  handleClick: function (elem) {
    const blank = Array(5).fill(String.fromCharCode(160)).join('');

    if (elem.innerText === blank && !state.isGameEnded) {
      state.movesLeft--;
      const row = elem.id[1];
      const col = elem.id[3];
      state.updateMatrix(row, col);

      if (state.isWinnerFound()) {
        state.isGameEnded = true;
        state.lastWinner = state.currentPlayer;
        state.tally[state.currentPlayer]++;
        document.getElementById('next').classList.remove('hidden');
      } else if (state.movesLeft === 0) {
        state.isGameEnded = true;
        document.getElementById('next').classList.remove('hidden');
      } else {
        state.togglePlayer();
      }

      render.renderBoard();
      render.renderMessage();
      render.renderTally();
    }
  },
}


const render = {
  renderBoard: function () {
    // renders DOM based on current state of the matrix
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        document.getElementById(`r${r}c${c}`).innerHTML = `&nbsp&nbsp${state.playerMap[state.matrix[r][c]]}&nbsp&nbsp`;
      }
    }
  },

  renderMessage: function () {
    if (state.isGameEnded) {
      if (state.isWinnerFound()) {
        document.getElementById('message').innerText = `You won, player ${state.playerMap[state.currentPlayer]}!`;
      } else {
        document.getElementById('message').innerText = 'It\'s a draw!';
      }
    } else {
      document.getElementById('message').innerText = `Make a move, player ${state.playerMap[state.currentPlayer]}!`;
    }
  },

  renderTally: function () {
    document.getElementById('scoreX').innerText = String(state.tally[1]).padStart(2, '0');
    document.getElementById('scoreO').innerText = String(state.tally[2]).padStart(2, '0');
  },

  renderNames: function () {
    document.getElementById('nameX').innerText = state.playerXName;
    document.getElementById('nameO').innerText = state.playerOName;
  },
}

// ********** Initialization **************
input.getNames();
render.renderTally();
render.renderNames();
render.renderMessage();
render.renderBoard();