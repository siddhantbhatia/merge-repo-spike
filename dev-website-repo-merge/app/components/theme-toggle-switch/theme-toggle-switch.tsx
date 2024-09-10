"use client";
import { useState, useEffect } from "react";

export const ThemeToggleSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};
