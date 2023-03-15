import { Link } from "react-router-dom"

import * as S from './styledLogin'
import logo from '../../img/logoBlack.png';


function Login (){ 
  return(
    <S.MainBlock>
        <S.CtnterBlock>
            <S.BlockImg src={logo} alt="music"/>
            <S.Input placeholder='Логин' />
            <S.Input type='password'placeholder='Пароль' />
            <Link to="/">
                <S.OstiumButton>Войти</S.OstiumButton>
            </Link>
            <Link to="/registro">
                <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
            </Link>
        </S.CtnterBlock>
    </S.MainBlock>
    )
}

export default Login;