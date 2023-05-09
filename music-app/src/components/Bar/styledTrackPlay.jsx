import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg'
import Note from '../../img/icon/note.svg'

export const trackPlay = styled.div`
  display: flex;
  flex-direction: row;
`

export const contain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`

export const image = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`

export function svg() {
  return (
    <HandySvg
      src={Note}
      width="18"
      height="17"
      fill="transparent"
      stroke="#4e4e4e"
    />
  )
}

export const author = styled.div`
  grid-area: author;
  min-width: 49px;
`

export const authorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`

export const album = styled.div`
  grid-area: album;
  min-width: 49px;
`
export const albumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
