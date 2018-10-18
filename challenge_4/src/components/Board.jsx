const Board = () => (
  <div>
    {_.range(6).map(i => 
      <div key={"r" + i}>{_.range(7).map(j =>
        <div className="cell" id={"r" + i + "c" + j} key={"r" + i + "c" + j}></div>)}
      </div>
    )}
  </div>
);

export default Board;