import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useGetTrackByIdQuery } from '../../api/api'
import TrackPlay from './TrackPlay'
import * as S from './styledBar'
import { getCurrentTrack } from '../../store/slises/player'
import { useContextTheme } from '../../context/ContextTheme'
import { BarProgress } from './Progress'
import { BarControls } from './barControls'
import { BarVolume } from './barVolume'

function Bar() {
  const theme = useContextTheme()
  const dispatch = useDispatch()

  const isPlaying = useSelector((state) => state.player.isPlaying)
  const currentTrackLink = useSelector((state) => state.player.currentTrackLink)

  const trackId = useSelector((state) => state.player.id)
  const isShow = useSelector((state) => state.player.showPlayer)

  const { data } = useGetTrackByIdQuery(trackId)

  const [track, setTrack] = useState(new Audio(currentTrackLink))

  if (isPlaying) {
    track.autoplay = true
  }

  useEffect(() => {
    dispatch(getCurrentTrack(data?.track_file))
  }, [data])

  useEffect(() => {
    track.pause()
    track.remove()

    setTrack(new Audio(currentTrackLink))
  }, [currentTrackLink])

  return (
    <S.bar
      isPlaying={isShow}
      style={{
        backgroundColor: theme.theme.colorNav,
        color: theme.theme.color,
      }}
    >
      <S.content>
        <BarProgress track={track} />
        <S.playerBlock>
          <S.player>
            <BarControls track={track} />

            <TrackPlay />
          </S.player>
          <BarVolume track={track} />
        </S.playerBlock>
      </S.content>
    </S.bar>
  )
}

export default Bar
