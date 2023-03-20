import * as S from './styledLogin'
import logo from '../../img/logoBlack.png';


function Registro (){ 
  return(
    <S.MainBlock>
        <S.CtnterBlock>
            <S.BlockImg src={logo} alt="logoBlack"/>
            <S.Input placeholder='Логин' />
            <S.Input placeholder='Пароль' />
            <S.Input placeholder='Повторите пароль' />
            <S.OstiumButton>Зарегистрироваться</S.OstiumButton>           
        </S.CtnterBlock>
    </S.MainBlock>
    )
}

export default Registro;