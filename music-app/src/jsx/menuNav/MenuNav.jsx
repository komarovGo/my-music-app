import { useState } from 'react';
import logo from '../../img/logo.png';

import * as S from './styledMenuNav'

function MenuNav (){
    const [visible, setVisible] = useState(false);
    
    function toggleVisibility() {
        setVisible(!visible);
    }

    return(
    <S.mainNav>
        <S.navLogo>
            <S.logoImage src={logo} alt="logo"/> 
        </S.navLogo>
        <S.navBurge onClick={() => toggleVisibility()} role="presentation">
            <S.burgeLine className="burger__line"/>
            <S.burgeLine className="burger__line"/>
            <S.burgeLine className="burger__line"/>
        </S.navBurge>
        {visible && (
        <S.navMenu>
            <S.menuList>
                <S.menuItem>
                    <S.menuLink href="http://" >Главное</S.menuLink>
                </S.menuItem>
                <S.menuItem>
                    <S.menuLink href="http://" >Мой плейлист</S.menuLink>
                </S.menuItem>
                <S.menuItem>
                    <S.menuLink href="http://" >Войти</S.menuLink>
                </S.menuItem>
            </S.menuList>
        </S.navMenu>
        )       
        }
    </S.mainNav>
    )
}
export default MenuNav;