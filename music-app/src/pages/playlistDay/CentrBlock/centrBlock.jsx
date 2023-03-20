import search from '../../../img/icon/search.svg';
import watch from '../../../img/icon/watch.svg';

import Playlist from './Playlist';


import * as S from './styledCenterBlock'


function CentrBlock (){
    return(
    <S.MainCenterblock>
        <S.CenterblockSearch>         
            <S.SearchSvg src={search} alt="search" />                          
            <S.SearchText type="search" placeholder="Поиск" name="search"/>
        </S.CenterblockSearch>
        <S.CenterBlockH2>Плейлист дня </S.CenterBlockH2>                     
        <S.CenterblockContent>
            <S.ContentTitle>
                <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
                <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
                <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
                <S.PlaylistTitleCol4>
                    <S.PlaylistTitleSvg  src={watch} alt="asd" />
                </S.PlaylistTitleCol4>
            </S.ContentTitle>
            <Playlist/>
        </S.CenterblockContent>
    </S.MainCenterblock>
    )
}

export default CentrBlock;