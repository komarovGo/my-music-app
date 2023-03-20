import { Link } from "react-router-dom"

import Cookies from 'js-cookie'

import logo from '../../img/logoBlack.png';

import * as S from './styledLogin'

function Login (){ 
const token = Cookies.get('token')
console.log(token);

    return(
    <S.MainBlock>
        <S.CtnterBlock>
            <S.BlockImg src={logo} alt="music"/>
            <S.Input placeholder='Логин' />
            <S.Input type='password'placeholder='Пароль' />
            <Link to="/main">
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