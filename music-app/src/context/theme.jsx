import { createContext, useContext } from 'react'

export const themes = {
  light: {
    color: '#000000',
    background: '#FFFFFF',
    backgroundMenuNav: '#F6F5F3',
    backgroundBurger: '#000000',
    border: '2px solid #AD61FF',
    borderBlack: '2px solid #000000',
  },
  dark: {
      color: '#FFFFFF',
      background: '#181818',
  }
}

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark;

  return theme;
}