import styled from 'styled-components'

export const content = styled.ul`
  display: flex;
  width: 1136px;
  height: 673px;
  flex-direction: column;
  overflow: auto;
      ::-webkit-scrollbar {
          width: 1px; /* ширина для вертикального скролла */
          height: 1px; /* высота для горизонтального скролла */
          background-color: #313131;
      }
`

export const playlist = styled.li`
  display: flex;
  flex-direction: column;
  
`
