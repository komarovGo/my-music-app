import { useState, useEffect} from 'react';
import { useThemeContext } from '../../context/theme'

import note from '../../img/icon/note.svg';
import like from '../../img/icon/like.svg';

import LoadingBlockGrey from './loadingGreyBlock';
import * as S from './styledPlaylist'

function Playlist (){    
    const {theme} = useThemeContext();

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
                            <S.TrackTitleLink style={{color:theme.color}} href="http://">Guilt
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink style={{color:theme.color}} href="http://">Nero</S.TrackAuthorLink >
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink  href="http://">Welcome Reality</S.TrackAlbumLink>
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
                            <S.TrackTitleLink style={{color:theme.color}} href="http://">Elektro 
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink style={{color:theme.color}} href="http://">Dynoro, Outwork, Mr. Gee</S.TrackAuthorLink>
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
                            <S.TrackTitleSvg style={{color:theme.color}} src={note} alt="asd" />
                        </S.TrackTitleImage>
                        <S.TrackTitleText>
                            <S.TrackTitleLink style={{color:theme.color}} href="http://">I’m Fire 
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink style={{color:theme.color}} href="http://">Ali Bakgor</S.TrackAuthorLink>
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
                            <S.TrackTitleLink style={{color:theme.color}} href="http://">Non Stop
                                <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink style={{color:theme.color}} href="http://">Стоункат, Psychopath</S.TrackAuthorLink>
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
                            <S.TrackTitleLink style={{color:theme.color}} href="http://">Run Run 
                                <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink style={{color:theme.color}} href="http://">Jaded, Will Clarke, AR/CO</S.TrackAuthorLink>
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
            <S.PlayListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            <S.TrackTitleSvg  src={note} alt="asd" />
                        </S.TrackTitleImage>
                        <S.TrackTitleText>
                            <S.TrackTitleLink style={{color:theme.color}} href="http://">Eyes on Fire 
                                <S.TrackTitleSpan>(Zeds Dead Remix)</S.TrackTitleSpan>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink style={{color:theme.color}} href="http://">Blue Foundation, Zeds Dead</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">Eyes on Fire</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="asd" />
                        <S.TrackTimeText>5:20</S.TrackTimeText>
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
                            <S.TrackTitleLink href="http://">Mucho Bien 
                                <S.TrackTitleSpan>(Hi Profile Remix)</S.TrackTitleSpan>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">Mucho Bien</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="atimesd" />
                        <S.TrackTimeText>3:41</S.TrackTimeText>
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
                            <S.TrackTitleLink href="http://">Knives n Cherries 
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="atimesd" />
                        <S.TrackTimeText>1:48</S.TrackTimeText>
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
                            <S.TrackTitleLink href="http://">How Deep Is Your Love 
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">Calvin Harris, Disciples</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">How Deep Is Your Love</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="atimesd" />
                        <S.TrackTimeText>3:32</S.TrackTimeText>
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
                            <S.TrackTitleLink href="http://">Morena 
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <S.TrackAuthorLink href="http://">Tom Boxer</S.TrackAuthorLink>
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <S.TrackAlbumLink href="http://">Soundz Made in Romania</S.TrackAlbumLink>
                    </S.TrackAlbum>
                    <S.TrackTime>
                        <S.TrackTimeSvg src={like} alt="atimesd" />
                        <S.TrackTimeText>3:36</S.TrackTimeText>
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
                            <S.TrackTitleLink href="http://"> 
                                <S.TrackTitleSpan/>
                            </S.TrackTitleLink>
                        </S.TrackTitleText>
                    </S.TrackTitle>
                    <S.TrackTime>
                        <S.TrackTimeText/>
                    </S.TrackTime>
                </S.PlaylistTrack>
            </S.PlayListItem>
        </S.ContentPlaylist>
    )
}

export default Playlist;