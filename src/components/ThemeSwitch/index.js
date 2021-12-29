import React from "react";
import { StatusBar, Switch } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

export const ThemeSwitcher = () => {

  const { theme, toggleTheme } = React.useContext(ThemeContext)

  const isDarkMode = theme.name == 'Dark'

  return (
    <Switch
      trackColor={{ true: "#767577", false: "#81b0ff" }}
      thumbColor={isDarkMode ? "#f4f3f4" : "#f5dd4b"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleTheme}
      value={isDarkMode}
      style={{ position: 'absolute', top: StatusBar.currentHeight }}
    />
  )
}
