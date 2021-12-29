import { darkTheme } from "./dark"
import { lightTheme } from "./light"
import { text } from "./text"

export const themes = {
  dark: { ...darkTheme, ...text },
  light: { ...lightTheme, ...text }
}