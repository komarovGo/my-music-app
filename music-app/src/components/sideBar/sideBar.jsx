import BarBlock from './sidebarBlock'
import * as S from './styledSideBar'
import { useContextTheme } from '../../context/ContextTheme'

function Sidebar() {
  const theme = useContextTheme()
  return (
    <S.sidebar
      style={{
        backgroundColor: theme.theme.background,
        color: theme.theme.color,
      }}
    >
      <S.personal>
        <S.name
          style={{
            color: theme.theme.color,
          }}
        >
          Sergey.Ivanov
        </S.name>
        <S.avatar />
      </S.personal>
      <BarBlock />
    </S.sidebar>
  )
}

export default Sidebar
