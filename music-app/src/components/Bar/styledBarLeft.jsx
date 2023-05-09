import styled, { css } from 'styled-components'
import { HandySvg } from 'handy-svg'
import Prev from '../../img/icon/prev.svg'
import Play from '../../img/icon/play.svg'
import Next from '../../img/icon/next.svg'
import Repeat from '../../img/icon/repeat.svg'
import Shuffle from '../../img/icon/shuffle.svg'
import Pause from '../../img/icon/pause.svg'

const btn = {
  col: css`
    padding: 5px;
    display: flex;
    align-items: center;

    &:active {
      fill: #696969;
      stroke: #ffffff;
      cursor: pointer;
    }

    &:active svg {
      fill: #696969;
      stroke: #ffffff;
      cursor: pointer;
    }

    &:hover svg {
      fill: transparent;
      stroke: #acacac;
      cursor: pointer;
    }
  `,
}

const titleMixin = () => {
  const styles = btn

  return styles
}

export const playerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`

export const btnPrev = styled.div`
  ${titleMixin}

  margin-right: 23px;
`
export function btnPrevSvg() {
  return <HandySvg src={Prev} width="15" height="14" />
}

export const btnPlay = styled.div`
  ${titleMixin}

  margin-right: 23px;
`
export function btnPlaySvg() {
  return <HandySvg src={Play} width="22" height="20" fill="#d9d9d9" />
}

export function btnPauseSvg() {
  return <HandySvg src={Pause} width="15" height="19" fill="#d9d9d9" />
}

export const btnNext = styled.div`
  ${titleMixin}

  margin-right: 28px;
  fill: #a53939;
`

export function btnNextSvg() {
  return (
    <HandySvg
      src={Next}
      width="15"
      height="14"
      fill="inherit"
      stroke="#d9d9d9"
    />
  )
}

export const btnRepeat = styled.div`
  ${titleMixin}

  margin-right: 24px;
`

export function btnRepeatSvg() {
  return (
    <HandySvg
      src={Repeat}
      width="18"
      height="12"
      fill="transparent"
      stroke="#696969"
    />
  )
}

export const btnShuffle = styled.div`
  ${titleMixin}

  display: flex;
  align-items: center;
`
export function btnShuffleSvg() {
  return (
    <HandySvg
      src={Shuffle}
      width="19"
      height="12"
      fill="transparent"
      stroke="#696969"
    />
  )
}
