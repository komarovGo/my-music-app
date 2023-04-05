import MenuNav from '../../components/menuNav/MenuNav';
import CentrBlock from './CentrBlock/centrBlock';
import Bar from '../../components/Bar/barMain';
import MenuSidebar from '../../components/buttomExet/buttomExet';

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