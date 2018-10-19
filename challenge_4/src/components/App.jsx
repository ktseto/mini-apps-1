import Board from './Board.jsx';
import Messages from './Messages.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      matrix: _.range(6).map(_ => Array(7).fill(0)),
      numMovesLeft: 42,
      currentPlayer: 1,
      endState: null,
    };
  }

  _getHorizontalWinner(matrix) {
    for (let row of matrix) {
      for (let i = 0; i < row.length - 3; i++) {
        if (row[i] === row[i + 1] &&
            row[i] === row[i + 2] &&
            row[i] === row[i + 3] &&
            row[i] !== 0) {
          return this.state.currentPlayer;
        }
      }
    }
    return null;
  }

  _getVerticalWinner(matrix) {
    return this._getHorizontalWinner(_.zip(...matrix));
  }

  _getDiagonalWinner(matrix) {
    const majorDiags = {};
    _.range(-3, 3).forEach(i => majorDiags[i] = []);

    const minorDiags = {};
    _.range(3, 9).forEach(i => minorDiags[i] = []);

    // get all diagonals; order of elements preserved
    _.range(6).forEach(r => {
      _.range(7).forEach(c => {
        if (-3 <= r - c && r - c <= 2) {
          majorDiags[r - c].push(matrix[r][c]);
        }
        if (3 <= r + c && r + c <= 8) {
          minorDiags[r + c].push(matrix[r][c]);
        }
      });
    });

    const allDiags = Object.values(majorDiags).concat(Object.values(minorDiags));
    return this._getHorizontalWinner(allDiags);

  }

  _getWinner(matrix) {
    return this._getHorizontalWinner(matrix) ||
           this._getVerticalWinner(matrix) ||
           this._getDiagonalWinner(matrix);
  }

  handleBoardClick(e) {
    if (!this.state.endState) {
      // find the bottomest, free cell of the column
      const colnum = e.target.id[3];
      const col = this.state.matrix.map(row => row[colnum]);
      const targetRow = col.lastIndexOf(0);

      if (targetRow !== -1) {
        const newMatrix = JSON.parse(JSON.stringify(this.state.matrix));  // deep copy
        newMatrix[targetRow][colnum] = this.state.currentPlayer;

        const winner = this._getWinner(newMatrix);

        if (winner) {
          this.setState({
            matrix: newMatrix,
            endState: 'win',
          });
        } else {
          if (this.state.numMovesLeft === 1) { // last move used up
            this.setState({
              matrix: newMatrix,
              numMovesLeft: 0,
              endState: 'tie',
            });
          } else {
            this.setState({
              matrix: newMatrix,
              numMovesLeft: this.state.numMovesLeft - 1,
              currentPlayer: 3 - this.state.currentPlayer,  // toggle player
            });
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        <Messages endState={this.state.endState} currentPlayer={this.state.currentPlayer}/>
        <Board matrix={this.state.matrix} handleBoardClick={this.handleBoardClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
