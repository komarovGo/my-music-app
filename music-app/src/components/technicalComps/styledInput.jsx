import styled from 'styled-components'

export const container = styled.div`
  display: flex;
  flex-direction: column;
`

export const input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  width: 285px;
  height: 32px;
    &::placeholder {
      background-color: transparent;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #d0cece;
    }
`

export const inputLine = styled.span`
  display: inline-block;
  width: 285px;
  border: 1px solid #d0cece;
  margin-bottom: 38px;
`
