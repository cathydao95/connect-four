function GameInfo({ redTurn, winner }) {
  return (
    <div className="heading">
      {winner ? (
        <h1>{winner} Wins!</h1>
      ) : (
        <h1>{redTurn ? "Player 1" : "Player 2"}'s Turn</h1>
      )}
    </div>
  );
}

export default GameInfo;
