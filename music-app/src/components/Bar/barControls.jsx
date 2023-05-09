/* eslint-disable no-param-reassign */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getTrackId,
  play,
  playNextTrack,
  playPrevTrack,
  repeatTrack,
  shuffleTracks,
  sortTracks,
} from '../../store/slises/player'
import * as S from './styledBarLeft'

export function BarControls({ track }) {
  const dispatch = useDispatch()

  const isPlaying = useSelector((state) => state.player.isPlaying)
  const trackIds = useSelector((state) => state.player.ids)
  const trackId = useSelector((state) => state.player.id)
  const isShuffle = useSelector((state) => state.player.isShuffle)
  const isRepeat = useSelector((state) => state.player.isRepeat)

  const togglePlay = () => {
    dispatch(play(!isPlaying))
  }

  const nextTrack = () => {
    const currentTrack = +trackIds.indexOf(trackId)
    if (currentTrack + 1 === trackIds.length) {
      dispatch(getTrackId(trackIds[0]))
      return
    }
    dispatch(playNextTrack(currentTrack))
  }

  const prevTrack = () => {
    const currentTrack = +trackIds.indexOf(trackId)
    if (!currentTrack) {
      dispatch(getTrackId(trackIds[0]))
      return
    }
    dispatch(playPrevTrack(currentTrack))
  }

  const shuffle = () => {
    if (isShuffle) {
      dispatch(sortTracks())
    } else {
      dispatch(shuffleTracks())
    }
  }

  const repeat = () => {
    track.loop = true
    dispatch(repeatTrack())
  }

  useEffect(() => {
    if (isPlaying) {
      track.play()
    } else {
      track.pause()
    }
  }, [isPlaying])
  return (
    <S.playerControls>
      <S.btnPrev onClick={prevTrack}>
        <S.btnPrevSvg />
      </S.btnPrev>
      {isPlaying === true ? (
        <S.btnPlay onClick={togglePlay} style={{ marginRight: '30px' }}>
          <S.btnPauseSvg alt="pause" />
        </S.btnPlay>
      ) : (
        <S.btnPlay onClick={togglePlay}>
          <S.btnPlaySvg alt="play" />
        </S.btnPlay>
      )}
      <S.btnNext onClick={nextTrack}>
        <S.btnNextSvg alt="next" />
      </S.btnNext>
      <S.btnRepeat onClick={repeat} isRepeat={isRepeat}>
        <S.btnRepeatSvg alt="repeat" />
      </S.btnRepeat>
      <S.btnShuffle onClick={shuffle} isShuffle={isShuffle}>
        <S.btnShuffleSvg alt="shuffle" />
      </S.btnShuffle>
    </S.playerControls>
  )
}
