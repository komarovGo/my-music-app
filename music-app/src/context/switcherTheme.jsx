/* eslint-disable react/jsx-no-constructed-context-values */
import { useContextTheme, themes } from './ContextTheme'
import * as S from './styledSwitcherTheme'

export function SwitcherTheme() {
  const { toggleTheme } = useContextTheme()
  const theme = useContextTheme()

  return (
    <S.buttonTheme
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.theme.colorNav,
        color: theme.theme.color,
      }}
    >
      {themes.dark === useContextTheme().theme ? (
        <S.buttonThemeMoon />
      ) : (
        <S.buttonThemeSun />
      )}
    </S.buttonTheme>
  )
}
