"use client";

import { useState } from "react";
import styles from "./page.module.css";

// config to visualise gaps in the grid where 0 means a gap and 1 is a clickable button
const GRID_CONFIG = [
  [1, 0, 1],
  [0, 1, 1],
  [1, 1, 0],
];

const CELL_COUNT = GRID_CONFIG.flat(1).filter(Boolean).length;

const UNFILL_INTERVAL = 300;

export default function GridLightPage() {
  const [filledCellIndexes, setFilledIndexes] = useState<Array<number>>([]);
  const [unfillInProgress, setUnfillInProgress] = useState(false);

  const onCellClick = (idx: number) => {
    const newFilledIndexes = [...filledCellIndexes, idx];
    setFilledIndexes(newFilledIndexes);

    if (newFilledIndexes.length === CELL_COUNT) {
      setUnfillInProgress(true);

      const intervalId = setInterval(() => {
        // use callback for set state to get the updated state on each interval instead of the snapshot/closure of state
        // when this method is defined
        // in strict mode, setState is called twice : https://stackoverflow.com/questions/62106596/reactjs-setstate-being-called-twice-in-a-function-called-once-why
        setFilledIndexes((currFilledIndexes) => {
          const newFilledIndexes = [...currFilledIndexes];
          newFilledIndexes.pop();

          if (newFilledIndexes.length === 0) {
            clearInterval(intervalId);
            setUnfillInProgress(false);
          }

          return newFilledIndexes;
        });
      }, UNFILL_INTERVAL);
    }
  };

  return (
    <>
      <h2>Grid lights</h2>
      <div>
        Click on all the cells in any order until all are filled and experience
        the magic of reversal
      </div>
      <div
        className={styles.grid_container}
        style={{ gridTemplateColumns: `repeat(${GRID_CONFIG[0].length}, 1fr)` }}
      >
        {GRID_CONFIG.flat(1).map((value, idx) => {
          if (value) {
            const isCellFilled = filledCellIndexes.includes(idx);
            return (
              <button
                className={[
                  styles.cell,
                  isCellFilled ? styles.cell_filled : "",
                ].join(" ")}
                disabled={isCellFilled || unfillInProgress}
                key={idx}
                onClick={() => onCellClick(idx)}
                aria-label={
                  isCellFilled ? "cell is marked" : "cell is unmarked"
                }
              />
            );
          } else {
            return <span key={idx} />;
          }
        })}
      </div>
    </>
  );
}
