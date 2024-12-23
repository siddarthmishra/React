import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  console.log("Inside deriveGameBoard");
  /** Here, on every load, gameBoard is reset to null i.e. same as INITIAL_GAME_BOARD
   * because gameBoard is deep copied from INITIAL_GAME_BOARD.
   * Later in below for loop, it is populated from gameTurns.
   * */
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  console.log(gameBoard);

  for (const turn of gameTurns) {
    // const { square, player } = turn;
    // const { row, col } = square;
    const {
      square: { row, col },
      player,
    } = turn;
    gameBoard[row][col] = player;
  }
  console.log("Exiting from deriveGameBoard");
  return gameBoard;
}

function deriveWinner(gameBoard, players, gameTurns) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    if (gameTurns.length <= 4) {
      break;
    }
    console.log("Checking winning combinations");
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      // winner = firstSquareSymbol;
      winner = players[firstSquareSymbol];
      console.log("Winner found - " + winner);
      break;
    }
  }
  return winner;
}

function App() {
  console.log("APP COMPONENT LOADED");
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  console.log("activePlayer - " + activePlayer);
  const gameBoard = deriveGameBoard(gameTurns);
  console.log("After deriveGameBoard");
  console.log(gameTurns);
  console.log(gameBoard);
  console.log(INITIAL_GAME_BOARD);

  const winner = deriveWinner(gameBoard, players, gameTurns);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    console.log(`Inside handleSelectSquare - ${rowIndex}-${colIndex}`);
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTruns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTruns;
    });
  }

  function handleRestart() {
    console.log("Inside handleRestart");
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log truns={gameTurns} />
    </main>
  );
}

export default App;
