import styled from "styled-components"


export  const PlayerTrackPlay  = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
`

export  const TrackPlayContain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
        grid-template-columns: auto 1fr;
        grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`

export  const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-area: image;
`

export  const TrackPlaySvg = styled.img`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`
export  const TrackPlayAuthor = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
`

export  const TrackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
`

export  const TrackPlayAlbum = styled.div`
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
`

export  const TrackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
`

export  const TrackPlayLikeDis = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-left: 26%;
`

export  const TrackPlayLike = styled.div`
    padding: 5px;
`
export  const TrackPlayLikeSvg = styled.img`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`

export  const TrackPlayDislike = styled.div`
    margin-left: 28.5px;
    padding: 5px
`
export  const TrackPlayDislikeSvg = styled.img`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`

// Скрывающий блок картинку воспроизведения

export  const ImegLoadingBlock = styled.div`
    top: 16px;
    position: absolute;
    width: 51px;  
    height: 51px;
    background-color: #313131 ;
`
export  const AuthorLoadingBlock = styled.div`
    top: 21px;
    left: 353px;
    position: absolute;
    width: 59px;  
    height: 15px;
    background-color: #313131 ;
`

export  const AlbumLoadingBlock = styled.div`
    top: 45px;
    left: 353px;
    position: absolute;
    width: 59px;  
    height: 15px;
    background-color: #313131 ;
`
// Скрывающий блок (картинку,автора, альбома) воспроизведения 
