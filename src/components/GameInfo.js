function GameInfo({ redTurn, winner }) {
  return (
    <div className="heading">
      <h1>
        {winner
          ? winner === "draw"
            ? `It's a ${winner}`
            : `${winner} wins!`
          : null}
        {!winner ? (redTurn ? "Player 1's Turn" : "Player 2's Turn") : null}
      </h1>
    </div>
  );
}

export default GameInfo;
