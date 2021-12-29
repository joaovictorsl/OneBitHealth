import React from 'react'
import { themes } from '../theme'

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = React.useState(true);

  const toggleTheme = () => setDarkMode(previousState => !previousState);

  function activeTheme() {
    return darkMode ? themes.dark : themes.light
  }

  return (
    <ThemeContext.Provider value={{ theme: activeTheme(), toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
