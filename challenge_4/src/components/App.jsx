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

  // _checkHorizontal() {

  // }

  // _checkVertical() {

  // }

  // _checkDiagonal() {

  // }

  handleBoardClick(e) {
    // find the bottomest, free cell of the column
    const colnum = e.target.id[3];
    const col = this.state.matrix.map(row => row[colnum]);
    const targetRow = col.lastIndexOf(0);

    if (targetRow !== -1) {
      const newMatrix = Object.assign({}, this.state.matrix);
      newMatrix[targetRow][colnum] = this.state.currentPlayer;

      const winner = this.getWinner();

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

  render() {
    return (
      <div>
        <Messages />
        <Board matrix={this.state.matrix} handleBoardClick={this.handleBoardClick.bind(this)}/>
      </div>
    );
  }
}

// const App = () => (
//   <div>
//     Hello
//   </div>
// );

export default App;
