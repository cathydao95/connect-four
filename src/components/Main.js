import Column from "./Column";
import { useState, useEffect } from "react";

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
  const [playing, setPlaying] = useState(false);
  const [redTurn, setRedTurn] = useState(true);
  const [winner, setWinner] = useState("");

  console.log(board);
  return (
    <div>
      <h1>Red's Turn</h1>
      <div className="container">
        {board.map((item, index) => {
          return (
            <div className="column" key={index}>
              {item.map((item, index) => (
                <div key={index} className="box"></div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
