import { useState } from 'react';
import { Link } from "react-router-dom"
import { useThemeContext } from '../../context/theme'

import logo from '../../img/logo.png';
import logoBlack from '../../img/logoBlack.png';
import BackgraundDarkSVG from '../../img/icon/BackgraundDarkSVG.svg';
import BackgraundLightSVG from '../../img/icon/BackgraundLightSVG.svg';

import * as S from './styledMenuNav'

function MenuNav (){
    const [visible, setVisible] = useState(false);
    const [isButtonTheme, setButtonTheme] = useState(true)
    const {toggleTheme,theme, IsDark} = useThemeContext();

    function toggleVisibility() {
        setVisible(!visible);
    }

    function toggleButtonTheme() {
        if (!isButtonTheme) {
            setButtonTheme(true);
        } else {
            setButtonTheme(false);                  
        }
    }

    return(
    <S.MainNav style={{backgroundColor:theme.backgroundMenuNav, color:theme.color}}> 
        <S.NavLogo>
            <S.LogoImage src={IsDark ? logo : logoBlack} alt="logo"/> 
        </S.NavLogo>
        <S.NavBurge onClick={() => toggleVisibility()} role="presentation">
            <S.BurgeLine style={{backgroundColor:theme.backgroundBurger}} />
            <S.BurgeLine style={{backgroundColor:theme.backgroundBurger}} />
            <S.BurgeLine style={{backgroundColor:theme.backgroundBurger}} />
        </S.NavBurge>
        {visible && (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem>
                    <Link to='/main'>
                        <S.MenuLink style={{color:theme.color}} >Главное</S.MenuLink>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to='/main/mytracks'>
                        <S.MenuLink style={{color:theme.color}} >Мой плейлист</S.MenuLink>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to='/'>
                    <S.MenuLink style={{color:theme.color}}  >Войти</S.MenuLink>
                    </Link>
                </S.MenuItem>
                <S.MenuItem onClick={toggleTheme} >
                     <S.backgraundColorSVG src={isButtonTheme ? BackgraundDarkSVG : BackgraundLightSVG} onClick={toggleButtonTheme}/>
                </S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
        )       
        }
    </S.MainNav>
    )
}
export default MenuNav;