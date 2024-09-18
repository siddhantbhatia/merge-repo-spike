"use client";

import { createContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContext {
  theme: Theme;
  setTheme: (theme: "light" | "dark") => void;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  setTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
