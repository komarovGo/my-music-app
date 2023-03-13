import { useState, useEffect} from 'react';
 
import note from '../../img/icon/note.svg';
import like from '../../img/icon/like.svg';
import dislike from '../../img/icon/dislike.svg';

import * as S from './styledBarCentr'


function BarCentr(){
    // Эмуляция загрузки
    const [isBarLoading, setBarLoading] = useState(true)

    useEffect(() => {
        const time = setTimeout(() => {
            setBarLoading(false)
        }, 3000)
            return () => clearTimeout(time)
    }, [])

    return (
    <S.playerTrackPlay>
        <S.trackPlayContain>
            <S.trackPlayImage>
                <S.trackPlaySvg src={note} alt="music"/>
            </S.trackPlayImage>
            {isBarLoading && <S.imegLoadingBlock/>}
            <S.trackPlayAuthor>
                <S.trackPlayAuthorLink href="http://">Ты та...</S.trackPlayAuthorLink>
            </S.trackPlayAuthor>
            {isBarLoading && <S.authorLoadingBlock/>}
            <S.trackPlayAlbum>
                <S.trackPlayAlbumLink href="http://">Баста</S.trackPlayAlbumLink>
            </S.trackPlayAlbum>
            {isBarLoading && <S.albumLoadingBlock/>}
        </S.trackPlayContain>
        <S.trackPlayLikeDis>
            <S.trackPlayLike>
                <S.trackPlayLikeSvg src={like} alt="like"/>
            </S.trackPlayLike>
            <S.trackPlayDislike >
                <S.trackPlayDislikeSvg src={dislike} alt="dislike"/>
            </S.trackPlayDislike>
        </S.trackPlayLikeDis>
    </S.playerTrackPlay>
    )
}

export default BarCentr;