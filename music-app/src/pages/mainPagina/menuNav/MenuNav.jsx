import { useState } from 'react';
import logo from '../../../img/logo.png';

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
                    <S.MenuLink href="http://" >Главное</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="http://" >Мой плейлист</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                    <S.MenuLink href="http://" >Войти</S.MenuLink>
                </S.MenuItem>
            </S.MenuList>
        </S.NavMenu>
        )       
        }
    </S.MainNav>
    )
}
export default MenuNav;