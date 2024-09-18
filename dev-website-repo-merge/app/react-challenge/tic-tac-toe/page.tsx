"use client";

import { useState } from "react";

import styles from "./page.module.css";

// indices of the three in a row win
const WIN_SCENARIO = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

export default function TicTacToePage() {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXPlaying, setIsXPlaying] = useState(true);
  const [gameWinner, setGameWinner] = useState<string | undefined>(undefined);
  const [gameDrawn, setGameDrawn] = useState(false);

  const checkGameStatus = (board: Array<string | null>) => {
    for (let [x, y, z] of WIN_SCENARIO) {
      if (board[x] !== null && board[y] === board[x] && board[z] === board[y]) {
        setGameWinner(board[x] as string);
        break;
      }
    }

    if (board.find((value) => value === null)) {
      setGameDrawn(true);
    }
  };

  const currentPlayer = isXPlaying ? "X" : "O";

  const onCellClick = (idx: number) => {
    const boardCopy = board.slice();
    boardCopy[idx] = currentPlayer;

    checkGameStatus(boardCopy);

    setBoard(boardCopy);
    setIsXPlaying(!isXPlaying);
  };

  const onReset = () => {
    setBoard(Array(9).fill(null));
    setIsXPlaying(true);
    setGameDrawn(false);
    setGameWinner(undefined);
  };

  return (
    <div className={styles.container}>
      <div
        aria-live="polite" //indicates that the content of the element may be updated dynamically and should be announced by screen readers.
      >
        {gameWinner
          ? `The winner is ${gameWinner}`
          : gameDrawn
          ? "It's a draw!"
          : `${currentPlayer}'s turn`}
      </div>
      <div className={styles.board}>
        {board.map((value, idx) => {
          return (
            <Cell
              mark={value}
              key={idx}
              disabled={value !== null || gameDrawn || Boolean(gameWinner)}
              onClick={() => onCellClick(idx)}
              index={idx + 1}
            />
          );
        })}
      </div>
      <button onClick={onReset}>Reset game</button>
    </div>
  );
}

function Cell({
  mark,
  disabled,
  onClick,
  index,
}: {
  mark: string | null;
  disabled: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <button
      className={styles.cell}
      disabled={disabled}
      onClick={onClick}
      aria-label={mark == null ? `Mark cell ${index} as ${mark}` : undefined}
    >
      <span
        aria-hidden={true} //  hides the cell mark (X or O) from screen readers, as the mark is already announced using the aria-label attribute on the button itself.
      >
        {mark}
      </span>
    </button>
  );
}
