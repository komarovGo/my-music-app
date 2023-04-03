import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'

import logo from '../../img/logoBlack.png';

import * as S from './styledLogin'

function Login (){
    const navigate = useNavigate()

    const [login, setLogin] = useState('');
    const [inPassword, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault()
        const userLogin = login
        const userPassword = inPassword

        if (userLogin === 'user' && userPassword === '1234') {
            Cookies.set('token', '1234')
            navigate('/main', { replace: true })
        } else {
            alert('неправильный логин или пароль')
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
                <S.OstiumButton onClick={handleLogin}>Войти</S.OstiumButton>
                <S.RegisterButton onClick={handleRegistration}>Зарегистрироваться</S.RegisterButton>
        </S.CtnterBlock>
    </S.MainBlock>
    )
}

export default Login;