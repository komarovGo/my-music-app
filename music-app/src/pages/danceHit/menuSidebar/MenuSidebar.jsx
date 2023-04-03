import { Link } from "react-router-dom"

import * as S from './styledMenuSidebar'
import Exit from '../../../img/Exit.png';


function MenuSidebar() {
    return(
    <S.mainSidebar>
        <Link to="/main">
            <S.sidebarPersonal src={Exit}/>
        </Link>    
    </S.mainSidebar>
    )
}

export default MenuSidebar;
