export default function GameBoard({ onSelectSquare, board }) {
  // export default function GameBoard({ onSelectSquare, isXSymbol }) {
  /**
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectSquare(rowIndex, colIndex) {
    // console.log(rowIndex + " - " + colIndex);
    setGameBoard((prevGameBoard) => {
      // Best Practice - Update Object State Immutably.
      // Deep clone the object/array and update the desired value.
      const updatedGameBoard = [...prevGameBoard.map((row) => [...row])];
      updatedGameBoard[rowIndex][colIndex] = isXSymbol ? "X" : "O";
      return updatedGameBoard;
    });
    // onSelectSquare is a function passed as props from the component "App".
    // This function changes turn from "X" to "O" and vice-versa.
    onSelectSquare();
  }
  */
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/** <button onClick={() => handleSelectSquare(rowIndex, colIndex)}> */}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
