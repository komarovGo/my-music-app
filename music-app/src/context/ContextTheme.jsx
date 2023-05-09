import React, { useContext } from 'react'

export const themes = {
  light: {
    color: '#000000',
    background: '#fff',
    colorNav: '#F6F5F3',
  },
  dark: {
    color: '#fff',
    background: '#181818',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useContextTheme = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark

  return theme
}
