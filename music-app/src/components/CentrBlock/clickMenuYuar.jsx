import styled from "styled-components";
import { useThemeContext } from '../../context/theme'

   const ClickMenuYear = styled.div`
    position: absolute;
    z-index: 1;
    left: 593px;
    top: 306px;
    width: 403px;
    height: 92px;
    background: #313131;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

    const LabelMenuYear = styled.label`
    cursor: pointer;
    font-family: 'StratosSkyeng';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`

function RenderClickMenuYuar (){
  const {theme} = useThemeContext();

    return(
        <ClickMenuYear style={{background:theme.backgroundMenuNav, border: theme.border}}>
            <input type="radio" name="year" id="new" value="Более новые"/>
            <LabelMenuYear  htmlFor="new">Более новые</LabelMenuYear>
            <input type="radio" name="year" id="old" value="Более старые"/>
            <LabelMenuYear  htmlFor="old">Более старые</LabelMenuYear>
        </ClickMenuYear>
    )
}


export default RenderClickMenuYuar;