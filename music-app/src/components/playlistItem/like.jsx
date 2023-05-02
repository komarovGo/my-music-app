import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useToggleFavoriteMutation } from '../../api/api'
import {
  addFavoriteTrack,
  removeFavoriteTrack,
} from '../../store/slises/favorite'
import * as S from './styledLike'

function TrackLike(props) {
  const dispatch = useDispatch()
  const [toggleFavorite] = useToggleFavoriteMutation()
  const [likeColor, setLikeColor] = useState(false)

  const favoriteTracks =
    useSelector((state) => state.favorite.favoriteTracks) || []
  const track = props.trackId

  const isFavorite =
    Array.isArray(favoriteTracks) &&
    favoriteTracks.some((favTrack) => favTrack === track)

  const handleToggleFavorite = (id) => {
    try {
      if (!id) {
        throw new Error('id is undefined')
      }

      toggleFavorite({ id: track, isFavorite: !isFavorite })

      const isFavoriteNow = !isFavorite

      if (isFavoriteNow) {
        dispatch(addFavoriteTrack({ id: track, isFavorite }))
        setLikeColor(isFavoriteNow)
      } else {
        dispatch(removeFavoriteTrack({ id: track }))
        setLikeColor(false)
      }
    } catch (err) {
      console.error('Failed to toggle favorite', err)
    }
  }
  return (
    <S.like onClick={handleToggleFavorite}>
      <S.likeSvg alt="like" active={likeColor} />
    </S.like>
  )
}

export default TrackLike
