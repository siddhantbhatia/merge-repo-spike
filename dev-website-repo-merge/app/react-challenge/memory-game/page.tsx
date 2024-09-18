"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";

const EMOJIS = [
  "🐵",
  "🐶",
  "🦊",
  "🐱",
  "🦁",
  "🐯",
  "🐴",
  "🦄",
  "🦓",
  "🦌",
  "🐮",
  "🐷",
  "🐭",
  "🐹",
  "🐻",
  "🐨",
  "🐼",
  "🐽",
  "🐸",
  "🐰",
  "🐙",
];

const shuffleArray = (arr: Array<string>) => {
  for (let idx = 0; idx < arr.length; idx += 1) {
    const randomIndex = Math.floor(Math.random() * (idx + 1));

    [arr[idx], arr[randomIndex]] = [arr[randomIndex], arr[idx]];
  }
};

const getTileCollection = (totalNumOfSlots: number, tileGroupCount: number) => {
  const numOfTiles = totalNumOfSlots / tileGroupCount;

  const tileCollection = [];

  for (let idx = 0; idx < numOfTiles; idx += 1) {
    tileCollection.push(EMOJIS[idx]);
    tileCollection.push(EMOJIS[idx]);
  }

  shuffleArray(tileCollection);

  return tileCollection;
};

const TOTAL_NUM_OF_SLOT = 20;
const GROUP_COUNT = 2;

export default function MemoryGamePage() {
  const [matched, setMatched] = useState<Array<boolean>>(
    Array(TOTAL_NUM_OF_SLOT).fill(false)
  );
  const [flipped, setFlipped] = useState<Array<number>>([]);
  const [tiles, setTiles] = useState(
    getTileCollection(TOTAL_NUM_OF_SLOT, GROUP_COUNT)
  );
  const [gameCompleted, setGameCompleted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onTileClick = (idx: number) => {
    let currFlipped = flipped;

    // the tile is added after the GROUP_COUNT number of tiles are already selected
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      currFlipped = [];
    }

    const newFlipped = [...currFlipped, idx];
    setFlipped(newFlipped);

    if (newFlipped.length === GROUP_COUNT) {
      let isMatch = true;
      for (let idx = 1; idx < GROUP_COUNT; idx += 1) {
        if (tiles[newFlipped[idx - 1]] != tiles[newFlipped[idx]]) {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        newFlipped.forEach((idx) => (matched[idx] = true));
        setMatched(matched.slice());
        setFlipped([]);

        if (matched.every(Boolean)) {
          setGameCompleted(true);
        }
      } else {
        timerRef.current = setTimeout(() => {
          setFlipped([]);
          timerRef.current = null;
        }, 1000);
      }
    }
  };

  const onReset = () => {
    setFlipped([]);
    setMatched(Array(TOTAL_NUM_OF_SLOT).fill(false));
    setGameCompleted(false);
    setTiles(getTileCollection(TOTAL_NUM_OF_SLOT, GROUP_COUNT));
  };

  return (
    <>
      <h2>Memory Game</h2>
      <div className={styles.board}>
        {tiles.map((value, idx) => {
          const tileFlipped = flipped.includes(idx) || matched[idx];
          let className = [styles.tile, matched[idx] && styles.tile_flipped]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={idx}
              onClick={() => onTileClick(idx)}
              disabled={tileFlipped}
              className={className}
              aria-label={tileFlipped ? `Tile has a ${value} emoji` : undefined}
            >
              <span aria-hidden={true}>{tileFlipped ? value : ""}</span>
            </button>
          );
        })}
      </div>
      {gameCompleted && <button onClick={() => onReset()}>Play again</button>}
    </>
  );
}
