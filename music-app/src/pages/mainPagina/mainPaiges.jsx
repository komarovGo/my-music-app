import MenuNav from './menuNav/MenuNav';
import CentrBlock from './CentrBlock/centrBlock';
import MenuSidebar from './menuSidebar/MenuSidebar';
import Bar from './Bar/barMain';

import * as S from './StyledMenuPiges'

function MainPiges() {
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

export default MainPiges;
