import styled from 'styled-components'

export const container = styled.div`
  position: absolute;
  width: 500px;
  height: 439px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const header = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 160px;
  line-height: 168px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
`

export const block = styled.div`
  display: flex;
`

export const notFound = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
`

export const img = styled.img`
  width: 52px;
  height: 52px;
`

export const text = styled.div`
  max-width: 300px;
  height: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.003em;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #4e4e4e;
  margin-top: 19px;
  margin-bottom: 36px;
`
