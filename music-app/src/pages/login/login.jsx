/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useUserLoginMutation, useUserTokenMutation } from '../../api/api'
import { setLogin, setToken } from '../../store/slises/auth'
import Input from '../../components/technicalComps/input'
import LogoBlack from '../../components/technicalComps/logoBlack'
import * as S from './styledLogin'
import BtnLogin from '../../components/technicalComps/btn'

function Login() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = (event) => {
    event.preventDefault()
    navigate('/registration', { replace: true })
  }

  const [login, { data, isSuccess, isLoading }] = useUserLoginMutation()
  const [getToken, { data: token, error: tokenError }] = useUserTokenMutation()

  const handleLogin = (event) => {
    event.preventDefault()

    if (!email || !password) {
      alert('введите свой логин и пароль или зарегистрируйтесь')
    } else {
      login({
        email,
        password,
      })
      getToken({
        email,
        password,
      })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
      document.cookie = `username=${data?.username}`
      dispatch(setToken(token?.access))
      document.cookie = `token=${token?.refresh}`
      dispatch(setLogin())
    }
  }, [isSuccess])

  return (
    <S.container>
      <LogoBlack />
      <S.wrapper>
        <Input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.wrapper>
      {tokenError && <S.ErrorMessage>{tokenError.data.detail}</S.ErrorMessage>}
      {!isLoading && <BtnLogin onClick={handleLogin} btntext="Войти" />}
      {isLoading && <BtnLogin onClick={handleLogin} btntext="Вход..." />}

      <S.btnReg onClick={handleRegistration}>Зарегистрироваться</S.btnReg>
    </S.container>
  )
}

export default Login
