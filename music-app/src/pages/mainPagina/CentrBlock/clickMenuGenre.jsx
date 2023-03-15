import styled from "styled-components";

const ClickMenuGener = styled.ul`
  position: absolute;
  top: 306px;
  left: 755px;
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
function RenderClickMenuGenre (){
   
    return(
        <div>
            <ClickMenuGener>
                <ClickMenuName>Рок</ClickMenuName>
                <ClickMenuName>Хип-хоп</ClickMenuName>
                <ClickMenuName>Поп-музыка</ClickMenuName>
                <ClickMenuName>Техно</ClickMenuName>
                <ClickMenuName>Инди</ClickMenuName>            
            </ClickMenuGener>
        </div>
    )
}


export default RenderClickMenuGenre;