import { useState, useEffect} from 'react';

import note from '../../../img/icon/note.svg';
import like from '../../../img/icon/like.svg';

import LoadingBlockGrey from './loadingGreyBlock';
import * as S from './styledPlaylist'

function Playlist (){    
    // Эмуляция загрузки
    const [isMainLoading, setMainLoading] = useState(true)
    
    useEffect(() => {
        const time = setTimeout(() => {
            setMainLoading(false)
        }, 3000)
            return () => clearTimeout(time)
    }, [])

    return(
        <S.ContentPlaylist>
            <S.PlayListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            <S.TrackTitleSvg src={note} alt="asd" />
                        </S.TrackTitleImage>
                        <S.TrackTitleText>
                            <S.TrackTitleLink href="http://">Guilt
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink >
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">Welcome Reality</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime className="track__time">
                        <S.TrackTimeSvg src={like} alt="asd"/>                           
                        <S.TrackTimeText>4:44</S.TrackTimeText>
                    </S.TrackTime>
                </S.PlaylistTrack>
            </S.PlayListItem>         
            <S.PlayListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            <S.TrackTitleSvg src={note} alt="asd" />
                        </S.TrackTitleImage>
                        <S.TrackTitleText>
                            <S.TrackTitleLink href="http://">Elektro 
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">Dynoro, Outwork, Mr. Gee</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">Elektro</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="asd" />
                        <S.TrackTimeText>2:22</S.TrackTimeText>
                    </S.TrackTime>
                </S.PlaylistTrack>
            </S.PlayListItem>               
            <S.PlayListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            <S.TrackTitleSvg src={note} alt="asd" />
                        </S.TrackTitleImage>
                        <S.TrackTitleText>
                            <S.TrackTitleLink href="http://">I’m Fire 
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">Ali Bakgor</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">I’m Fire</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="asd" />
                        <S.TrackTimeText>2:22</S.TrackTimeText>
                    </S.TrackTime>
                </S.PlaylistTrack>
            </S.PlayListItem>  
            <S.PlayListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            <S.TrackTitleSvg  src={note} alt="music" />
                        </S.TrackTitleImage>
                        <S.TrackTitleText>
                            <S.TrackTitleLink href="http://">Non Stop
                                <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">Стоункат, Psychopath</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">Non Stop</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="atimesd" />
                        <S.TrackTimeText>4:12</S.TrackTimeText>
                    </S.TrackTime>
                </S.PlaylistTrack>
            </S.PlayListItem>
            <S.PlayListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            <S.TrackTitleSvg src={note} alt="asd" />
                        </S.TrackTitleImage>
                        <S.TrackTitleText>
                            <S.TrackTitleLink href="http://">Run Run 
                                <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">Jaded, Will Clarke, AR/CO</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">Run Run</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="asd" />
                        <S.TrackTimeText>2:54</S.TrackTimeText>
                    </S.TrackTime>
                </S.PlaylistTrack>
            </S.PlayListItem>
        </S.ContentPlaylist>
    )
}

export default Playlist;