import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useThemeContext } from '../../context/theme'


import playlist01 from '../../img/playlist01.png';
import playlist02 from '../../img/playlist02.png';
import playlist03 from '../../img/playlist03.png';

import * as S from './styledMenuSidebar'

function MenuSidebar() {
    const [isLoading, setLoading] = useState(true)
    const {theme} = useThemeContext()
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

    return(
    <S.mainSidebar style={{backgroundColor:theme.background}}>
        <S.sidebarPersonal>
            <S.sidebarPersonalName style={{color:theme.color}}>Sergey.Ivanov</S.sidebarPersonalName>
            <S.sidebarAvatar/>
        </S.sidebarPersonal>
        <S.sidebarBlock>
            <S.sidebarList>
                <S.sidebarItem>
                    <Link to="/main/plailist/1">
                        <S.sidebarLink href="http://">
                            <S.sidebarImg src={playlist01} alt="day's playlist"/>
                            {isLoading && <S.sidebarLoading/>}
                        </S.sidebarLink>
                    </Link>
                </S.sidebarItem>
                <S.sidebarItem>
                    <Link to="/main/plailist/2">
                        <S.sidebarLink href="http://">
                            <S.sidebarImg src={playlist02} alt="day's playlist"/>
                            {isLoading && <S.sidebarLoading/>}
                        </S.sidebarLink>
                    </Link>
                </S.sidebarItem>
                <S.sidebarItem>
                    <Link to="/main/plailist/3">
                        <S.sidebarLink href="http://">
                            <S.sidebarImg src={playlist03} alt="day's playlist"/>
                            {isLoading && <S.sidebarLoading/>}
                        </S.sidebarLink>
                    </Link>
                </S.sidebarItem>
            </S.sidebarList>
        </S.sidebarBlock>
    </S.mainSidebar>
    )
}

export default MenuSidebar;
