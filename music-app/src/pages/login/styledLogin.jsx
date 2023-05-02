import styled from 'styled-components'

export const container = styled.form`
  padding-top: 43px;
  position: absolute;
  width: 366px;
  height: 439px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const wrapper = styled.div`
  margin-top: 22px;
`

export const btnReg = styled.button`
  width: 278px;
  height: 52px;
  margin-top: 20px;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  outline: none;
  box-sizing: border-box;

  &:hover {
    background: #f4f5f6;
  }

  &:active {
    background: #d9d9d9;
  }
`

export const button = styled.button`
  width: 100px;
  height: 50px;
`

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  text-align: center;
  position: absolute;
  max-width: 280px;
  top: 220px;
`
