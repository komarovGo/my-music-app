import styled from 'styled-components'
import { HandySvg } from 'handy-svg'
import Vol from '../../img/icon/volume.svg'

export const volume = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`

export const volumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`
export const volumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`

export function volumeSvg() {
  return <HandySvg src={Vol} width="13" height="18" fill="transparent" />
}

export const progress = styled.div`
  width: 109px;
`

export const progressLine = styled.input`
  -webkit-appearance: none;
  appearance: none;
  height: 0px;
  width: 109px;
  border-radius: 12px;
  background: #1a1a1a;
  border: 2px solid #ffffff;
  outline: none;
  box-sizing: border-box;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background: #1a1a1a;
    border: 2px solid #ffffff;
    cursor: pointer;
  }
`
