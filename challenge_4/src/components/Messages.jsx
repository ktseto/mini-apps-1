const Messages = ({ endState, currentPlayer }) => (
  <div id="messages">{
    endState === 'win'
      ? 'You won, Player ' + currentPlayer
      : (endState === 'tie'
          ? 'It\'s a tie!'
          : 'It\'s your turn, Player ' + currentPlayer)
  }</div>
);


// const Messages = () => (
//   <div>messages</div>
// );

export default Messages;