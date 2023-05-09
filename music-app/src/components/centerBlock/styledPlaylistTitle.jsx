import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg'
import Watch from '../../img/icon/watch.svg'

const colSize = {
  col: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
  `,
}

const titleMixin = (view = 'col') => {
  const styles = colSize[view]

  return styles
}

export const playlistTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 1136px;
`

export const playlistTitleCol01 = styled.div`
  ${titleMixin()}

  width: 447px;
`

export const playlistTitleCol02 = styled.div`
  ${titleMixin()}

  width: 321px;
`

export const playlistTitleCol03 = styled.div`
  ${titleMixin()}

  width: 245px;
`
export const playlistTitleCol04 = styled.div`
  ${titleMixin()}

  width: 60px;
  text-align: end;
`
export function playlistTitleSvg() {
  return (
    <HandySvg
      src={Watch}
      width="12"
      height="12"
      fill="transparent"
      stroke="#696969"
    />
  )
}
