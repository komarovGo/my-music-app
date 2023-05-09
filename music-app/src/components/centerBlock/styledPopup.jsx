import styled from 'styled-components'

export const wrapper = styled.div`
  position: absolute;
  width: 248px;
  height: 305px;
  margin-top: 10px;
  background: #313131;
  border-radius: 12px;
`

export const PopupList = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 180px;
  height: 232px;
  margin-top: 36.5px;
  margin-left: 34px;
  text-align: left;
  line-height: 40px;
  font-weight: 400;
  font-size: 20px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 237px;
    background: #4b4949;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 65px;
    background: #ffffff;
    border-radius: 10px;
  }
`

export const popupLink = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
  }
`
