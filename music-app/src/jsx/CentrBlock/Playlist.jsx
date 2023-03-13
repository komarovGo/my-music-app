import { useState, useEffect} from 'react';

import note from '../../img/icon/note.svg';
import like from '../../img/icon/like.svg';

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
        <S.contentPlaylist>
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">Guilt
                                <S.trackTitleSpan/>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">Nero</S.trackAuthorLink >
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">Welcome Reality</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime className="track__time">
                        <S.trackTimeSvg src={like} alt="asd"/>                           
                        <S.trackTimeText>4:44</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>         
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">Elektro 
                                <S.trackTitleSpan/>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">Dynoro, Outwork, Mr. Gee</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">Elektro</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="asd" />
                        <S.trackTimeText>2:22</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>               
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">I’m Fire 
                                <S.trackTitleSpan/>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">Ali Bakgor</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">I’m Fire</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="asd" />
                        <S.trackTimeText>2:22</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>  
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg  src={note} alt="music" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">Non Stop
                                <S.trackTitleSpan>(Remix)</S.trackTitleSpan>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">Стоункат, Psychopath</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">Non Stop</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="atimesd" />
                        <S.trackTimeText>4:12</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">Run Run 
                                <S.trackTitleSpan>(feat. AR/CO)</S.trackTitleSpan>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">Jaded, Will Clarke, AR/CO</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">Run Run</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="asd" />
                        <S.trackTimeText>2:54</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg  src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">Eyes on Fire 
                                <S.trackTitleSpan>(Zeds Dead Remix)</S.trackTitleSpan>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">Blue Foundation, Zeds Dead</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">Eyes on Fire</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="asd" />
                        <S.trackTimeText>5:20</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">Mucho Bien 
                                <S.trackTitleSpan>(Hi Profile Remix)</S.trackTitleSpan>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">Mucho Bien</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="atimesd" />
                        <S.trackTimeText>3:41</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">Knives n Cherries 
                                <S.trackTitleSpan/>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">minthaze</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">Captivating</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="atimesd" />
                        <S.trackTimeText>1:48</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">How Deep Is Your Love 
                                <S.trackTitleSpan/>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">Calvin Harris, Disciples</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">How Deep Is Your Love</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="atimesd" />
                        <S.trackTimeText>3:32</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://">Morena 
                                <S.trackTitleSpan/>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackAuthor>
                        <S.trackAuthorLink href="http://">Tom Boxer</S.trackAuthorLink>
                    </S.trackAuthor>
                    <S.trackAlbum>
                        <S.trackAlbumLink href="http://">Soundz Made in Romania</S.trackAlbumLink>
                    </S.trackAlbum>
                    <S.trackTime>
                        <S.trackTimeSvg src={like} alt="atimesd" />
                        <S.trackTimeText>3:36</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>
            <S.playListItem>
                {isMainLoading && <LoadingBlockGrey/>}
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleSvg src={note} alt="asd" />
                        </S.trackTitleImage>
                        <S.trackTitleText>
                            <S.trackTitleLink href="http://"> 
                                <S.trackTitleSpan/>
                            </S.trackTitleLink>
                        </S.trackTitleText>
                    </S.trackTitle>
                    <S.trackTime>
                        <S.trackTimeText/>
                    </S.trackTime>
                </S.playlistTrack>
            </S.playListItem>
        </S.contentPlaylist>
    )
}

export default Playlist;