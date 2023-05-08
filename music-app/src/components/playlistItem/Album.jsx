import { useDispatch } from 'react-redux';
import { getTrackId, play } from '../../store/slises/player';

import * as S from './styledAlbum'

function Album(props) {

  const dispatch = useDispatch()

  const playTrackHandler = (e) => {
    e.preventDefault()

    dispatch(getTrackId(props.trackId))

    dispatch(play(true))

  }
  return (
    <S.album>
      <S.albumLink onClick={playTrackHandler}>{props.name}</S.albumLink>
    </S.album>
  )
}

export default Album
