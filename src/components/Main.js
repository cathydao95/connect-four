import { useState, useEffect } from "react";
import Button from "./Button";
import { deepClone, checkForWinner } from "../gameUtils";
import GameInfo from "./GameInfo";

function Main() {
  // set board with 7 columns, 6 rows
  const [board, setBoard] = useState([
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ]);

  // set red/Player 1's turn first
  const [redTurn, setRedTurn] = useState(true);
  const [winner, setWinner] = useState("");

  console.log(board);

  // when the board changes, check for a winner
  useEffect(() => {
    setWinner(window.connectFour.checkForWinner(board));
  }, [board]);

  console.log("winner", winner);

  // function to reset states of board, winner, redTurn
  function restartGame() {
    setBoard([
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ]);
    setRedTurn(true);
    setWinner("");
  }

  return (
    <div>
      {/* import component that displays game information */}
      <GameInfo redTurn={redTurn} winner={winner} />
      {/* if there is a winner or draw, display the restart game button else, do not display anything */}
      {winner ? (
        <button className="restart-button" type="button" onClick={restartGame}>
          Restart Game
        </button>
      ) : null}
      {/* map through each column on the board and then map through each cell in each column */}
      <div className="container">
        {board.map((column, index) => {
          // create handleDrop function in the map to provide a function for each button in each column. Use indexOf to find the first index in which "null exists" and set as nextEmptySpot
          function handleDrop() {
            setRedTurn((prevTurn) => !prevTurn);
            const nextEmpty = column.indexOf(null);
            setBoard((prevBoard) => {
              const clonedBoard = window.connectFour.deepClone(board);
              if (redTurn) {
                clonedBoard[index][nextEmpty] = "Player 1";
              } else {
                clonedBoard[index][nextEmpty] = "Player 2";
              }
              return clonedBoard;
            });
          }

          return (
            <div key={index}>
              {/* if there is a winner, do not display drop buttons */}
              {winner ? null : (
                <Button
                  handleDrop={handleDrop}
                  // disable button if a column is full or if there is a winner
                  disableButton={!column.includes(null) || winner}
                />
              )}

              <div className="column">
                {column.map((cell, index) => (
                  <div key={index} className="cell">
                    <div
                      className={`circle ${cell === "Player 1" && "red"} ${
                        cell === "Player 2" && "yellow"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
