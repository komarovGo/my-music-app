import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { useUserRegistroMutation } from '../../Redux/Api';



import * as S from './styledLogin'
import logo from '../../img/logoBlack.png';


function Registro (){ 
    const [signup, { isSuccess, error }] = useUserRegistroMutation()
     const navigate = useNavigate()

    const [value, setValue] = useState({
        username: '',
        email: '',
        password: '',
    })
    
    const onSignUp = () => {   
        signup(value)
        if(isSuccess === true){
            navigate('/', { replace: true })
            
        }
    }

    const LoginChange = (e) => {
        setValue({
            ...value,
            username: e.target.value,
        })
    }
     const EmailChange = (e) => {
        setValue({
            ...value,
            email: e.target.value,
        })
    }
     const PasswordChange = (e) => {
            setValue({
            ...value,
            password: e.target.value,
        })

    }
 
  return(
    <S.MainBlock>
        <S.CtnterBlock>
            <S.BlockImg src={logo} alt="logoBlack"/>
            <S.Input type='text' placeholder='Логин' onChange={(e) => LoginChange(e)}/>
                {error && error.data.username && (
                <S.ErrorText>{error.data.username[0]}</S.ErrorText>)}
            <S.Input type='email' placeholder='Электронная почта' onChange={(e) => EmailChange(e)}/>
                {error && error.data.email && (
                <S.ErrorText>{error.data.email[0]}</S.ErrorText>
                )}
            <S.Input type='password' placeholder='Пароль' onChange={(e) => PasswordChange(e)}/>
                {error && error.data.password && (
                <S.ErrorText>{error.data.password[0]}</S.ErrorText>)}

            <S.OstiumButton onClick={onSignUp}>Зарегистрироваться</S.OstiumButton>   
        
        </S.CtnterBlock>
    </S.MainBlock>
    )
}

export default Registro;