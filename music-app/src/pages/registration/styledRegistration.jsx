import styled from 'styled-components'

export const container = styled.form`
  padding-top: 23px;
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

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  text-align: center;
  position: absolute;
  max-width: 280px;
`
