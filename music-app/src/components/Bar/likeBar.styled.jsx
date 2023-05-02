import styled, { css } from 'styled-components'
import { HandySvg } from 'handy-svg'
import Like from '../../img/icon/like.svg'
import Dislike from '../../img/icon/dislike.svg'

const likeDis = {
  col: css`
    padding: 5px;
  `,
}

const titleMixin = () => {
  const styles = likeDis

  return styles
}

export const likeBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`

export const like = styled.div`
  ${titleMixin}
`

export function likeSvg(props) {
  const fill = props.active ? 'white' : 'transparent'
  return (
    <HandySvg src={Like} width="14" height="12" fill={fill} stroke="#696969" />
  )
}

export const dislike = styled.div`
  ${titleMixin}
  margin-left: 28.5px;
`

export function dislikeSvg() {
  return (
    <HandySvg
      src={Dislike}
      width="14.34"
      height="13"
      fill="transparent"
      stroke="#696969"
    />
  )
}
