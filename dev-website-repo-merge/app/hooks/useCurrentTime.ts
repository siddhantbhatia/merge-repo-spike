"use client";

import { useEffect, useState } from "react";

export const useCurrentTime = () => {
  let [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentTime;
};
