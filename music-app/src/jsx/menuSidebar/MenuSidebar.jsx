import { useState, useEffect } from 'react';

import playlist01 from '../../img/playlist01.png';
import playlist02 from '../../img/playlist02.png';
import playlist03 from '../../img/playlist03.png';

import * as S from './styledMenuSidebar'

function MenuSidebar() {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

    return(
    <S.mainSidebar>
        <S.sidebarPersonal>
            <S.sidebarPersonalName>Sergey.Ivanov</S.sidebarPersonalName>
            <S.sidebarAvatar/>
        </S.sidebarPersonal>
        <S.sidebarBlock>
            <S.sidebarList>
                <S.sidebarItem>
                    <S.sidebarLink href="http://">
                        <S.sidebarImg src={playlist01} alt="day's playlist"/>
                        {isLoading && <S.sidebarLoading/>}
                    </S.sidebarLink>
                </S.sidebarItem>
                <S.sidebarItem>
                    <S.sidebarLink href="http://">
                        <S.sidebarImg src={playlist02} alt="day's playlist"/>
                         {isLoading && <S.sidebarLoading/>}
                    </S.sidebarLink>
                </S.sidebarItem>
                <S.sidebarItem>
                    <S.sidebarLink href="http://">
                        <S.sidebarImg src={playlist03} alt="day's playlist"/>
                         {isLoading && <S.sidebarLoading/>}
                    </S.sidebarLink>
                </S.sidebarItem>
            </S.sidebarList>
        </S.sidebarBlock>
    </S.mainSidebar>
    )
}

export default MenuSidebar;
