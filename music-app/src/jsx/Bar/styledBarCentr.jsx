import styled from "styled-components"


export  const playerTrackPlay  = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
`

export  const trackPlayContain = styled.div`
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

export  const trackPlayImage = styled.div`
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

export  const trackPlaySvg = styled.img`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`
export  const trackPlayAuthor = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
`

export  const trackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
`

export  const trackPlayAlbum = styled.div`
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
`

export  const trackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
`

export  const trackPlayLikeDis = styled.div`
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

export  const trackPlayLike = styled.div`
    padding: 5px;
`
export  const trackPlayLikeSvg = styled.img`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`

export  const trackPlayDislike = styled.div`
    margin-left: 28.5px;
    padding: 5px
`
export  const trackPlayDislikeSvg = styled.img`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`

// Скрывающий блок картинку воспроизведения

export  const imegLoadingBlock = styled.div`
    top: 16px;
    position: absolute;
    width: 51px;  
    height: 51px;
    background-color: #313131 ;
`
export  const authorLoadingBlock = styled.div`
    top: 22px;
    left: 357px;
    position: absolute;
    width: 59px;  
    height: 15px;
    background-color: #313131 ;
`

export  const albumLoadingBlock = styled.div`
    top: 45px;
    left: 357px;
    position: absolute;
    width: 59px;  
    height: 15px;
    background-color: #313131 ;
`
// Скрывающий блок (картинку,автора, альбома) воспроизведения 
