import { Link } from "react-router-dom"

import * as S from './styledButtomExet'
import Exit from '../../img/Exit.png';


function ButtomExet() {
    return(
    <S.mainBox>
        <Link to="/main">
            <S.exitImg src={Exit}/>
        </Link>    
    </S.mainBox>
    )
}

export default ButtomExet;
