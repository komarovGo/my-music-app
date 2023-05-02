import styled, { css } from 'styled-components'
import { HandySvg } from 'handy-svg'
import Note from '../../img/icon/note.svg'

const text = {
  col: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
   
    color: #696969;
    
  `,
}

const titleMixin = () => {
  const styles = text

  return styles
}

export const title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`

export const titleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
  cursor: pointer;
`

export function NoteSvg() {
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

export const titleText = styled.div``

export const titleLink = styled.h3`
  ${titleMixin}
  color: #ffffff;
`

export const titleSpan = styled.span`
  ${titleMixin}
  color: #4e4e4e;
`
