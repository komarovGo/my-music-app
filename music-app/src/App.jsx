/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { AppRoutes } from './routes'
import * as S from './styledApp'
import { themes, ThemeContext } from './context/ContextTheme'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)


  
  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    setCurrentTheme(themes.dark)
  }
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.App>
        <S.wrapper>
          <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <S.container>
              <AppRoutes />
            </S.container>
            <S.footer />
          </ThemeContext.Provider>
        </S.wrapper>
      </S.App>
    </BrowserRouter>
  )
}

export default App
