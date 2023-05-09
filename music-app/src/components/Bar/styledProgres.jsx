import styled from 'styled-components'

export const playerProgress = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  background: #2e2e2e;

  &::-webkit-slider-thumb {
    height: 0px;
    width: 0px;
  }

  &:hover::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`
