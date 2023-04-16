// import { useState, useEffect} from 'react';
import { useThemeContext } from '../../context/theme'
import { useGetMusicQuery } from '../../Redux/Api';

import note from '../../img/icon/note.svg';
import like from '../../img/icon/like.svg';

// import LoadingBlockGrey from './loadingGreyBlock';
import * as S from './styledPlaylist'

function Playlist (){    
    const {data = [], isLoading} = useGetMusicQuery();
    if (isLoading) return <h1>Loading...</h1>

    const {theme} = useThemeContext();

    // Эмуляция загрузки
    // const [isMainLoading, setMainLoading] = useState(true)
    
    // useEffect(() => {
    //     const time = setTimeout(() => {
    //         setMainLoading(false)
    //     }, 3000)
    //         return () => clearTimeout(time)
    // }, [])

    return(
        <S.ContentPlaylist>
            {data.map(item =>(
                <S.PlayListItem key={item.id}>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            <S.TrackTitleSvg src={note} alt="asd" />
                        </S.TrackTitleImage>
                        <S.TrackTitleText>
                            <S.TrackTitleLink style={{color:theme.color}} href="http://">{item.name} 
                                <S.TrackTitleSpan/>
                                
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink style={{color:theme.color}} href="http://">{item.author}</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">{item.album}</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="asd" />
                        <S.TrackTimeText>{item.duration_in_seconds}</S.TrackTimeText>
                    </S.TrackTime>  
                </S.PlayListItem>
            ))}
        </S.ContentPlaylist>

    )
}

export default Playlist;