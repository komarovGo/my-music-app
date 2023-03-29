import { Link } from "react-router-dom"

import search from '../../../img/icon/search.svg';
import smile from '../../../img/smile.svg';

import * as S from './styledCenterBlock'

function CentrBlock (){
    return(
    <S.MainCenterblock>
        <S.CenterblockSearch>         
            <S.SearchSvg src={search} alt="search" />                          
            <S.SearchText type="search" placeholder="Поиск" name="search"/>
        </S.CenterblockSearch>
        <S.BlockContent>
            <S.ErrorH2>404</S.ErrorH2>
            <S.TitleBox>
                <S.titleH3>Страница не найдена</S.titleH3>
                <S.smileSvg src={smile}/>
            </S.TitleBox>
            <S.description>Возможно, она была удалена или перенесена на другой адрес</S.description>
            <Link to="/main"><S.buttonMeinPages>Вернуться на главную</S.buttonMeinPages></Link>
        </S.BlockContent>
    </S.MainCenterblock>
    )
}

export default CentrBlock;