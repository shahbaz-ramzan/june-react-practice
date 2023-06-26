// ThemeContext.js
import React, { createContext, useState } from "react";

// Create a new context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide the context value to its children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
