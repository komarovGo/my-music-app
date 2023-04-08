import styled from "styled-components";
import { useThemeContext } from '../../context/theme'


const ClickMenuAuthor = styled.ul`
  position: absolute;
  top: 306px;
  left: 449px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 248px;
  height: 305px;
  background: #313131;
  cursor: pointer;
  border-radius: 12px;
  z-index: 1;
`

const ClickMenuName = styled.li`
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
    :hover{
    text-decoration: underline;
    color: #B672FF;
  }
`

function RenderClickMenuAuthor (){
  const {theme} = useThemeContext();
  return(
      <div>
          <ClickMenuAuthor style={{background:theme.backgroundMenuNav, border: theme.border}}>
              <ClickMenuName>Michael Jackson</ClickMenuName>
              <ClickMenuName>Frank Sinatra</ClickMenuName>
              <ClickMenuName>Calvin Harris</ClickMenuName>
              <ClickMenuName>Zhu</ClickMenuName>
              <ClickMenuName>Arctic Monkeys</ClickMenuName>            
          </ClickMenuAuthor>
      </div>
  )
}


export default RenderClickMenuAuthor;