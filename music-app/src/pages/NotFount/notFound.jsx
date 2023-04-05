import MenuNav from '../../components/menuNav/MenuNav';
import CentrBlock from './CentrBlock/centrBlock';
import Bar from '../../components/Bar/barMain';
import ButtomExet from '../../components/buttomExet/buttomExet';

import * as S from '../mainPagina/StyledMenuPiges'

function NotFound() {
  return (  
    <S.Container>
        <S.Main>
          <MenuNav/>
          <CentrBlock/>
          <ButtomExet/>
        </S.Main>
        <Bar/>
        <footer className="footer"/>
   </S.Container>    
  )
}

export default NotFound;