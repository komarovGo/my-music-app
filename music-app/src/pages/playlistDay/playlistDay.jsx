import MenuNav from './menuNav/MenuNav';
import CentrBlock from './CentrBlock/centrBlock';
import Bar from './Bar/barMain';
import MenuSidebar from './menuSidebar/MenuSidebar';

import * as S from '../mainPagina/StyledMenuPiges'

function PlaylistDay() {
  return (  
    <S.Container>
        <S.Main>
          <MenuNav/>
          <CentrBlock/>
          <MenuSidebar/>
        </S.Main>
        <Bar/>
        <footer className="footer"/>
   </S.Container>    
  )
}

export default PlaylistDay;