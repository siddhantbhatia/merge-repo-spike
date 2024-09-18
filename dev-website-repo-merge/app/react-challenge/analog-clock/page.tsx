"use client";

import { useEffect, useState } from "react";
import { useCurrentTime } from "app/hooks";

import styles from "./page.module.css";

const CIRCLE_RADIUS = 360;

function padTwoDigit(number: number) {
  return number >= 10 ? String(number) : `0${number}`;
}

export default function AnalogClockPage() {
  const currentTime = useCurrentTime();
  const [isOnServer, setIsOnServer] = useState(true);

  useEffect(() => {
    setIsOnServer(false);
  });

  const hour = currentTime.getHours() % 12;
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const secondFraction = second / 60;
  const minuteFraction = (minute + secondFraction) / 60;
  const hourFraction = (hour + minuteFraction) / 12;

  const dateTimeDisplay = `${padTwoDigit(hour)}:${padTwoDigit(
    minute
  )}:${padTwoDigit(second)}`;

  return isOnServer ? (
    <div>Loading...</div>
  ) : (
    <time
      dateTime={dateTimeDisplay} // for screen readers to announce the date time in 24hour format
      className={styles.clock}
    >
      <ClockHand
        angle={hourFraction * CIRCLE_RADIUS}
        className={styles.clock_hand_hour}
      />
      <ClockHand
        angle={minuteFraction * CIRCLE_RADIUS}
        className={styles.clock_hand_minute}
      />
      <ClockHand
        angle={secondFraction * CIRCLE_RADIUS}
        className={styles.clock_hand_second}
      />
    </time>
  );
}

function ClockHand({ angle = 0, className = "" }) {
  return (
    <div
      aria-hidden={true} // hide from accessibility since it is for presentation purpose and not useful to screen readers
      className={`${styles.clock_hand} ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
}
