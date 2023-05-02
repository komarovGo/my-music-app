/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import Filter from './Filter'
import * as S from './styledCenterBlock'
import HeaderCenterBlock from './Search'
import PlaylistTitle from './playlistTitle'
import CenterBlockContent from './BlockContent'
import { useContextTheme } from '../../context/ContextTheme'

function CenterBlock(props) {
  const theme = useContextTheme()
  return (
    <S.centerblock
      style={{
        backgroundColor: theme.theme.background,
        color: theme.theme.color,
      }}
    >
      <HeaderCenterBlock title={props.title} />
      <Filter />
      <PlaylistTitle />
      <CenterBlockContent tracks={props.tracks} />
    </S.centerblock>
  )
}

export default CenterBlock
