/* eslint-disable no-param-reassign */
import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import { play } from '../../store/slises/player'
import * as S from './styledProgres'

export function BarProgress({ track }) {
  const dispatch = useDispatch()

  const isPlaying = useSelector((state) => state.player.isPlaying)

  const [trackProgress, setTrackProgress] = useState(0)

  const progressBarInterval = useRef(null)
  const { duration } = track

  const progressByPercent = (trackProgress / duration) * 100

  const clearProgressBarInterval = () => {
    if (typeof progressBarInterval.current === 'number') {
      clearInterval(progressBarInterval.current)
    }
  }
  const startProgressTimer = () => {
    clearProgressBarInterval()

    progressBarInterval.current = setInterval(() => {
      setTrackProgress(track.currentTime)
      if (track.ended) {
        dispatch(play(false))
      }
    }, 1000)
  }

  const onThumbChange = (e) => {
    clearProgressBarInterval()
    track.currentTime = Number(e.target.value)
    setTrackProgress(Number(e.target.value))
    startProgressTimer()
  }
  if (isPlaying) {
    startProgressTimer()
  }
  return (
    <S.playerProgress
      type="range"
      min="0"
      max={Number.isNaN(duration) ? '100' : `${duration}`}
      value={trackProgress}
      gradientValue={
        Number.isNaN(progressByPercent) ? '0' : `${progressByPercent}`
      }
      onChange={onThumbChange}
    />
  )
}
