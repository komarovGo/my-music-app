/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import PlaylistItem from '../playlistItem/PlaylistItem'
import * as S from './styledBlockContent'
import { useGetAllTracksQuery } from '../../api/api'
import { setTracksIds } from '../../store/slises/player'

function CenterBlockContent(props) {
  let { data } = {}
  const dispatch = useDispatch()
  const filteredBy = useSelector((state) => state.filter.filterValue)
  const filterCategory = useSelector((state) => state.filter.filteredBy)
  const isFilter = useSelector((state) => state.filter.isFilter)
  const playlist = props.tracks || []

  if (playlist.length === 0) {
    ({ data } = useGetAllTracksQuery(''))
  } else {
    data = playlist
  }
  const sorted = data?.filter((val) =>
    val[filterCategory]?.includes(filteredBy)
  )

  useEffect(() => {
    if (props.track) {
      dispatch(setTracksIds(props.tracks.map(({ id }) => id)))
    }
    if (isFilter === true) {
      dispatch(setTracksIds(sorted.map(({ id }) => id)))
    } else {
      dispatch(setTracksIds(data?.map(({ id }) => id)))
    }
  })

  return (
    <S.content>
      <S.playlist>
        {isFilter === true
          ? sorted.map(
              ({
                id,
                name,
                author,
                album,
                track_file,
                duration_in_seconds,
              }) => (
                <PlaylistItem
                  trackId={id}
                  key={id}
                  name={name}
                  link={track_file}
                  author={author}
                  album={album}
                  time={duration_in_seconds}
                />
              )
            )
          : data?.map(
              ({
                id,
                name,
                author,
                album,
                track_file,
                duration_in_seconds,
              }) => (
                <PlaylistItem
                  trackId={id}
                  key={id}
                  name={name}
                  link={track_file}
                  author={author}
                  album={album}
                  time={duration_in_seconds}
                />
              )
            )}
      </S.playlist>
    </S.content>
  )
}

export default CenterBlockContent
