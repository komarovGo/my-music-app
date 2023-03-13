import search from '../../img/icon/search.svg';
import watch from '../../img/icon/watch.svg';

import Playlist from './Playlist';
import FilterMenu from './FilterMenu';

import * as S from './styledCenterBlock'


function CentrBlock (){
    return(
    <S.MainCenterblock>
        <S.CenterblockSearch>         
            <S.SearchSvg src={search} alt="search" />                          
            <S.SearchText type="search" placeholder="Поиск" name="search"/>
        </S.CenterblockSearch>
        <S.CenterBlockH2>Треки</S.CenterBlockH2>
        <FilterMenu/>                       
        <S.CenterblockContent>
            <S.ContentTitle>
                <S.playlistTitleCol1>Трек</S.playlistTitleCol1>
                <S.playlistTitleCol2>ИСПОЛНИТЕЛЬ</S.playlistTitleCol2>
                <S.playlistTitleCol3>АЛЬБОМ</S.playlistTitleCol3>
                <S.playlistTitleCol4>
                    <S.playlistTitleSvg  src={watch} alt="asd" />
                </S.playlistTitleCol4>
            </S.ContentTitle>
            <Playlist/>
        </S.CenterblockContent>
    </S.MainCenterblock>
    )
}

export default CentrBlock;