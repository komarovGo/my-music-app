import { useDispatch, useSelector } from 'react-redux'

import { getTrackId, play } from '../../store/slises/player'

import * as S from './styledAuthor'
import { useContextTheme } from '../../context/ContextTheme'

function Author(props) {
  const theme = useContextTheme()
  
  const isPlaying = useSelector((state) => state.player.isPlaying)

  const dispatch = useDispatch()

  const playTrackHandler = (e) => {
    e.preventDefault()

    dispatch(getTrackId(props.trackId))

    dispatch(play(!isPlaying))
  }
  return (
    <S.author>
      <S.authorLink
        style={{
          color: theme.theme.color,
        }}
        onClick={(e) => playTrackHandler(e)}
      >
        {props.name}
      </S.authorLink>
    </S.author>
  )
}

export default Author
