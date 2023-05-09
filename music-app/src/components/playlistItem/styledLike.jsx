import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg'
import Like from '../../img/icon/like.svg'

export const like = styled.button`
  background-color: transparent;
  border: none;
`

export function likeSvg(props) {
  const fill = props.active ? 'white' : 'transparent'

  return (
    <HandySvg src={Like} width="14" height="12" fill={fill} stroke="#696969" />
  )
}
