/* eslint-disable no-param-reassign */
import { useState } from 'react'
import * as S from './styledVolume'

export function BarVolume({ track }) {
  const [isVolumeOn, setIsVolumeOn] = useState(true)
  const [volumeValue, setVolumeValue] = useState(0.2)
  const [prevVolumeValue, setPrevVolumeValue] = useState(0)

  track.volume = volumeValue

  const onVolumeChange = (e) => {
    if (!isVolumeOn) {
      setIsVolumeOn(true)
    }
    setVolumeValue(Number(e.target.value))
  }

  const onVolumeToggle = () => {
    setIsVolumeOn(!isVolumeOn)
    if (isVolumeOn) {
      setPrevVolumeValue(volumeValue)
      setVolumeValue(0)
    } else {
      setVolumeValue(prevVolumeValue)
    }
  }

  return (
    <S.volume>
      <S.volumeContent>
        <S.volumeImage onClick={onVolumeToggle}>
          <S.volumeSvg alt="volume" />
        </S.volumeImage>
        <S.progress>
          <S.progressLine
            type="range"
            name="range"
            min="0"
            max="1"
            step="0.01"
            value={volumeValue}
            onChange={(e) => onVolumeChange(e)}
          />
        </S.progress>
      </S.volumeContent>
    </S.volume>
  )
}
