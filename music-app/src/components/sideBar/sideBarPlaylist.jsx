import * as S from './styledSideBarPlaylist'
import { useContextTheme, themes } from '../../context/ContextTheme'

export default function SideBarPlaylist() {
  const theme = useContextTheme()
  return (
    <S.sidebar
      style={{
        backgroundColor: theme.theme.background,
        color: theme.theme.color,
      }}
    >
      <S.logOut>
        {themes.dark === useContextTheme().theme ? (
          <S.logOutSvg />
        ) : (
          <S.logOutSvgBlack />
        )}
      </S.logOut>
    </S.sidebar>
  )
}


