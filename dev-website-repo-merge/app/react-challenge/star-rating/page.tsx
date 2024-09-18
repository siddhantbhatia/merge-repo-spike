"use client";

import { useState } from "react";
import styles from "./page.module.css";

function Star({ filled = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={[styles.star_icon, filled ? styles.star_icon_filled : ""].join(
        " "
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

const NUMBER_OF_STARS = 5;

export default function StarRatingPage() {
  const [ratingIndex, setRatingIndex] = useState(2);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const starArray: Array<typeof Star> = Array(NUMBER_OF_STARS).fill(Star);

  return (
    <>
      <h2>Star rating</h2>
      <div>
        {starArray.map((StarElement, idx) => {
          return (
            <span
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setRatingIndex(idx)}
            >
              <StarElement
                filled={
                  hoverIndex != null ? hoverIndex >= idx : ratingIndex >= idx
                }
              />
            </span>
          );
        })}
        <div style={{ textAlign: "center" }}>Rating is {ratingIndex + 1}</div>
      </div>
    </>
  );
}
