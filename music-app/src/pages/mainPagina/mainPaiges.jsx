import MenuNav from '../../components/menuNav/MenuNav';
import CentrBlock from '../../components/CentrBlock/centrBlock';
import MenuSidebar from '../../components/menuSidebar/MenuSidebar';
import Bar from '../../components/Bar/barMain';

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
