import { useState } from "react";
import "./App.css";

function App() {
  const [board, setboard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setturn] = useState("X");
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((box) => box !== "");
   
  function set(index) {
    if (board[index] !== "" || winner || isDraw) {
      return;
    }
    const newboard = [...board];
    newboard[index] = turn;
    if (turn === "X") {
      setturn("O");
    } else {
      setturn("X");
    }
    setboard(newboard);
  }

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  let status = `Next player: ${turn}`;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Draw!";
  }
   function restartGame() {
     setboard(["", "", "", "", "", "", "", "", ""]);
     setturn("X");
   }
  return (
    <div>
      <p>{status}</p>
      <div className="board">
        {board.map((box, index) => (
          <button key={index} onClick={() => set(index)}>
            {box}
          </button>
        ))}
      </div>
      <button className="restart" onClick={restartGame}>Restart</button>
    </div>
  );
}

export default App;
