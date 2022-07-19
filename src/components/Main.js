import { useState, useEffect } from "react";
import Button from "./Button";
import { deepClone, checkForWinner } from "../gameUtils";
import GameInfo from "./GameInfo";

function Main() {
  const [board, setBoard] = useState([
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ]);

  const [redTurn, setRedTurn] = useState(true);
  const [winner, setWinner] = useState("");

  console.log(board);

  useEffect(() => {
    setWinner(window.connectFour.checkForWinner(board));
  }, [board]);

  console.log("winner", winner);

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
      <GameInfo redTurn={redTurn} winner={winner} />
      {winner ? (
        <button className="restart-button" type="button" onClick={restartGame}>
          Restart Game
        </button>
      ) : null}
      <div className="container">
        {board.map((column, index) => {
          function handleDrop() {
            setRedTurn((prevTurn) => !prevTurn);
            const nextEmptySpot = column.indexOf(null);
            setBoard((prevBoard) => {
              const clonedBoard = window.connectFour.deepClone(board);
              if (redTurn) {
                clonedBoard[index][nextEmptySpot] = "Player 1";
              } else {
                clonedBoard[index][nextEmptySpot] = "Player 2";
              }
              return clonedBoard;
            });
          }

          return (
            <div key={index}>
              {winner ? null : (
                <Button
                  handleDrop={handleDrop}
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
