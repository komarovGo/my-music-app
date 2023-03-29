import { useState } from 'react'
import { Link } from "react-router-dom"

import logo from '../../img/logoBlack.png';

import * as S from './styledLogin'

function Login (){ 
    const {inMail, setMail} = useState('');
    // const {inPassword, setPassword} = useState('');

    const valueEmail = (event) => {
        setMail(event.tarigt.value);
    }

   
    // const passwordEmail = ({ event }) => {
    //     setPassword(event.value)
    // }
    console.log({inMail});
    return(
    <S.MainBlock>
        <S.CtnterBlock>
            <S.BlockImg src={logo} alt="music"/>
            <S.Input placeholder='Логин' value={inMail} onChange={valueEmail}/>
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