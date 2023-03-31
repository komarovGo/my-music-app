import { useState } from 'react'
// eslint-disable-next-line import/no-duplicates
import { Link } from "react-router-dom"
import Cookies from 'js-cookie'
// eslint-disable-next-line import/no-duplicates
import { useNavigate } from 'react-router-dom'

import logo from '../../img/logoBlack.png';

import * as S from './styledLogin'

function Login (){
    const navigate = useNavigate()

    const {login, setLogin} = useState('');
    const {inPassword, setPassword} = useState('');

    const handleLogin = (event) => {
        event.preventDefault()
        const userLogin = login
        const userPassword = inPassword

        console.log(userLogin, userPassword)


        if (userLogin === 'user' && userPassword === '1234') {
            Cookies.set('token', '1234')
            navigate('/', { replace: true })
        } else {
            console.log('неправильный логин или пароль')
        }
    }

    const handleRegistration = (event) => {
        event.preventDefault()
        navigate('/registro', { replace: true })
    }

    return(
    <S.MainBlock>
        <S.CtnterBlock>
            <S.BlockImg src={logo} alt="music"/>
            <S.Input placeholder='Логин' value={login} onChange={(e) => setLogin(e.target.value)}/>
            <S.Input type='password'placeholder='Пароль' value={inPassword} onChange={(e) => setPassword(e.target.value)} />
            <Link to="/main">
                <S.OstiumButton onClick={handleLogin}>Войти</S.OstiumButton>
            </Link>
            <Link to="/registro">
                <S.RegisterButton onClick={handleRegistration}>Зарегистрироваться</S.RegisterButton>
            </Link>
        </S.CtnterBlock>
    </S.MainBlock>
    )
}

export default Login;