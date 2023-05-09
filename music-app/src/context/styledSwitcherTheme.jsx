import styled from 'styled-components'
import { HandySvg } from 'handy-svg'
import Sun from '../img/icon/sun.svg'
import Moon from '../img/icon/moon.svg'

export const buttonTheme = styled.button`
  background-color: #181818;
  border: none;
  margin-top: 26px;
`

export function buttonThemeSun() {
  return <HandySvg src={Sun} width="39" height="39" fill="transparent" />
}

export function buttonThemeMoon() {
  return <HandySvg src={Moon} width="39" height="39" fill="transparent" />
}
