import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useUserLoginMutation, useUserTokenMutation } from "../../Redux/Api";
import { setUser } from '../../Redux/userSlice'

// import Cookies from 'js-cookie'

import logo from "../../img/logoBlack.png";

import * as S from "./styledLogin";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userlogin, { error, data  }] = useUserLoginMutation();

  const [userToken, { data: token }] = useUserTokenMutation();
    
  const [valueLogin, setValue] = useState({
    email: "",
    password: "",
  });

  const EntranceLogin = () => {
      userlogin(valueLogin)   
      userToken(valueLogin) 
        dispatch(setUser({
          username: data.username,
          email: data.email,
          id: data.id,
          token: {token},
        }))
          navigate('/main', { replace: true });
          console.log(data);
    }
      
  // Cookies.set('token', '1234')

  // qweqweqwe
  // kaka@mail.ru
  // pomidor11
 

  const EmailChange = (e) => {
    setValue({
      ...valueLogin,
      email: e.target.value,
    });
  };
  const PasswordChange = (e) => {
    setValue({
      ...valueLogin,
      password: e.target.value,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    navigate("/registro", { replace: true });
  };


  return (
    <S.MainBlock>
      <S.CtnterBlock>
        <S.BlockImg src={logo} alt="music" />
        {error && error.data.detail && (
          <h5 style={{ color: "black" }}>{error.data.detail}</h5>
        )}
        <S.Input
          type="email"
          placeholder="email"
          onChange={(e) => EmailChange(e)}
        />
        {error && error.data.email && (
          <S.ErrorText>{error.data.email}</S.ErrorText>
        )}
        <S.Input
          type="password"
          placeholder="Пароль"
          onChange={(e) => PasswordChange(e)}
        />
        {error && error.data.password && (
          <S.ErrorText>{error.data.password}</S.ErrorText>
        )}
        <S.OstiumButton onClick={EntranceLogin}>Войти</S.OstiumButton>
        <S.RegisterButton onClick={handleRegistration}>
          Зарегистрироваться
        </S.RegisterButton>
      </S.CtnterBlock>
    </S.MainBlock>
  );
}

export default Login;
