const Board = ({ matrix, handleBoardClick }) => (
  <div>
    {_.range(6).map(i => 
      <div key={ "r" + i }>
        {_.range(7).map(j =>
          <div className={ "player" + matrix[i][j] }
               id={ "r" + i + "c" + j }
               key={ "r" + i + "c" + j }
               onClick={e => handleBoardClick(e)}>
          </div>)}
      </div>
    )}
  </div>
);

export default Board;