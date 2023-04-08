import { useState, useEffect} from 'react';
import { useThemeContext } from '../../context/theme'

 
import note from '../../img/icon/note.svg';
import like from '../../img/icon/like.svg';
import dislike from '../../img/icon/dislike.svg';

import * as S from './styledBarCentr'


function BarCentr(){
    const {theme} = useThemeContext()

    // Эмуляция загрузки
    const [isBarLoading, setBarLoading] = useState(true)

    useEffect(() => {
        const time = setTimeout(() => {
            setBarLoading(false)
        }, 3000)
            return () => clearTimeout(time)
    }, [])

    return (
    <S.PlayerTrackPlay>
        <S.TrackPlayContain>
            <S.TrackPlayImage>
                <S.TrackPlaySvg src={note} alt="music"/>
            </S.TrackPlayImage>
            {isBarLoading && <S.ImegLoadingBlock/>}
            <S.TrackPlayAuthor>
                <S.TrackPlayAuthorLink style={{color:theme.color}} href="http://">Ты та...</S.TrackPlayAuthorLink>
            </S.TrackPlayAuthor>
            {isBarLoading && <S.AuthorLoadingBlock/>}
            <S.TrackPlayAlbum>
                <S.TrackPlayAlbumLink style={{color:theme.color}} href="http://">Баста</S.TrackPlayAlbumLink>
            </S.TrackPlayAlbum>
            {isBarLoading && <S.AlbumLoadingBlock/>}
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