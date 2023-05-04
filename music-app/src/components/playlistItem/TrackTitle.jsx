import { useDispatch } from 'react-redux'
import * as S from './styledTrackTitle'
import { useContextTheme } from '../../context/ContextTheme'
import { getTrackId, play } from '../../store/slises/player'

function TrackTitle(props) {
  const theme = useContextTheme()
  // const isPlaying = useSelector((state) => state.player.isPlaying)

  const dispatch = useDispatch()

  const playTrackHandler = (e) => {
    e.preventDefault()

    dispatch(getTrackId(props.trackId))

    dispatch(play(true))
  }

  return (
    <S.title>
      <S.titleImage
        onClick={(e) => playTrackHandler(e)}
        style={{
          backgroundColor: theme.theme.background,
        }}
      >
        <S.NoteSvg alt="music" />
      </S.titleImage>
      <S.titleText>
        <S.titleLink
          style={{
            color: theme.theme.color,
          }}
          
        >
          {props.track}
        </S.titleLink>
      </S.titleText>
    </S.title>
  )
}

export default TrackTitle
