import { useState } from 'react';
import { Link } from "react-router-dom"
import logo from '../../img/logo.png';

import * as S from './styledMenuNav'

function MenuNav (){
    const [visible, setVisible] = useState(false);
    
    function toggleVisibility() {
        setVisible(!visible);
    }

    return(
    <S.MainNav>
        <S.NavLogo>
            <S.LogoImage src={logo} alt="logo"/> 
        </S.NavLogo>
        <S.NavBurge onClick={() => toggleVisibility()} role="presentation">
            <S.BurgeLine className="burger__line"/>
            <S.BurgeLine className="burger__line"/>
            <S.BurgeLine className="burger__line"/>
        </S.NavBurge>
        {visible && (
        <S.NavMenu>
            <S.MenuList>
                <S.MenuItem>
                    <Link to='/main'>
                        <S.MenuLink>Главное</S.MenuLink>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to='/main/mytracks'>
                        <S.MenuLink >Мой плейлист</S.MenuLink>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>                 
                    <Link to='/'>
                    <S.MenuLink >Войти</S.MenuLink>
                    </Link>
                </S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
        )       
        }
    </S.MainNav>
    )
}
export default MenuNav;