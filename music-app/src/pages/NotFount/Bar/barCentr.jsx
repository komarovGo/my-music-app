
import note from '../../../img/icon/note.svg';
import like from '../../../img/icon/like.svg';
import dislike from '../../../img/icon/dislike.svg';

import * as S from './styledBarCentr'


function BarCentr(){
    return (
    <S.PlayerTrackPlay>
        <S.TrackPlayContain>
            <S.TrackPlayImage>
                <S.TrackPlaySvg src={note} alt="music"/>
            </S.TrackPlayImage>
            <S.ImegLoadingBlock/>
            <S.TrackPlayAuthor>
                <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
             <S.AuthorLoadingBlock/>
            <S.TrackPlayAlbum>
                <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
            </S.TrackPlayAlbum>
            <S.AlbumLoadingBlock/>
        </S.TrackPlayContain>
        <S.TrackPlayLikeDis>
            <S.TrackPlayLike>
                <S.TrackPlayLikeSvg src={like} alt="like"/>
            </S.TrackPlayLike>
            <S.TrackPlayDislike >
                <S.TrackPlayDislikeSvg src={dislike} alt="dislike"/>
            </S.TrackPlayDislike>
        </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
    )
}

export default BarCentr;