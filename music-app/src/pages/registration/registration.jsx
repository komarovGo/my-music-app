import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import * as S from './styledRegistration'
import Input from '../../components/technicalComps/input'
import BtnLogin from '../../components/technicalComps/btn'
import { useUserRegistationMutation } from '../../api/api'
import LogoBlack from '../../components/technicalComps/logoBlack'

function Registration() {
  const [registation, { error, isSuccess }] = useUserRegistationMutation()

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [validatePassword, setValidatePassword] = useState('')

  const OnSignup = (e) => {
    e.preventDefault()
    if (userData.password === validatePassword) {
      registation(userData)
      console.log(userData)
    } else {
      alert('Пароли не совпадают')
    }
  }

  function handleInputChange(input) {
    function hndl(e) {
      userData[input] = e.target.value
      setUserData(userData)
    }

    return hndl
  }

  const ValidatePass = (e) => {
    setValidatePassword(e.target.value)
  }

  return (
    <S.container>
      <LogoBlack />
      <Input
        type="text"
        placeholder="Логин"
        onChange={handleInputChange('username')}
      />
      {error && error.data.username && (
        <S.ErrorMessage style={{ top: '100px' }}>
          {error.data.username[0]}
        </S.ErrorMessage>
      )}
      <Input
        type="email"
        placeholder="Email"
        onChange={handleInputChange('email')}
      />
      {error && error.data.email && (
        <S.ErrorMessage style={{ top: '170px' }}>
          {error.data.email[0]}
        </S.ErrorMessage>
      )}
      <Input
        type="password"
        placeholder="Пароль"
        onChange={handleInputChange('password')}
      />
      {error && error.data.password && (
        <S.ErrorMessage style={{ top: '240px' }}>
          {error.data.password[0]}
        </S.ErrorMessage>
      )}
      <Input
        type="password"
        placeholder="Повторите пароль"
        onChange={ValidatePass}
      />
      <BtnLogin btntext="Зарегистрироваться" onClick={OnSignup} />
      {isSuccess && <Navigate to="/login" replace />}
    </S.container>
  )
}

export default Registration
