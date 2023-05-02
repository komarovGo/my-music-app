/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components'
import { HandySvg } from 'handy-svg'
import Search from '../../img/icon/search.svg'

export const header = styled.div``

export const search = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export function searchSvg() {
  return (
    <HandySvg
      src={Search}
      width="17"
      height="17"
      fill="transparent"
      stroke="#ffffff"
    />
  )
}

export const searchInput = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const h2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
