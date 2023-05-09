import { useSelector, useDispatch } from 'react-redux'
import {
  addFavoriteTrack,
  removeFavoriteTrack,
} from '../../store/slises/favorite'
import { useToggleFavoriteMutation } from '../../api/api'
import * as S from './likeBar.styled'

export function LikeBar() {
  const dispatch = useDispatch()
  const [toggleFavorite] = useToggleFavoriteMutation()
  const currentTrackId = useSelector((state) => state.player.id)

  const favoriteTracks =
    useSelector((state) => state.favorite.favoriteTracks) || []

  const isFavorite =
    Array.isArray(favoriteTracks) &&
    favoriteTracks.some((favTrack) => favTrack === currentTrackId)

  const handleAddTrack = () => {
    toggleFavorite({ id: currentTrackId, isFavorite: !isFavorite })
    dispatch(addFavoriteTrack({ id: currentTrackId, isFavorite }))
    console.log(favoriteTracks, 'add')
  }

  const handleDeleteTrack = () => {
    toggleFavorite({ id: currentTrackId, isFavorite: !isFavorite })
    dispatch(
      removeFavoriteTrack({ id: currentTrackId, isFavorite: !isFavorite })
    )
  }
  return (
    <S.likeBar onClick={handleAddTrack}>
      <S.like>
        <S.likeSvg alt="like" active={isFavorite} />
      </S.like>
      <S.dislike onClick={handleDeleteTrack}>
        <S.dislikeSvg alt="dislike" />
      </S.dislike>
    </S.likeBar>
  )
}
