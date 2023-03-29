import styled from "styled-components"


export  const MainCenterblock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
        -ms-flex-positive: 3;
            flex-grow: 3;
    padding: 20px 40px 20px 111px;
`

export  const CenterblockSearch  = styled.div`
    width: 100%;
    border-bottom: 1px solid #4E4E4E;
    margin-bottom: 51px;
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
`

export  const SearchSvg = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
`

export  const SearchText = styled.input`
    -webkit-box-flex: 100;
        -ms-flex-positive: 100;
            flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`

export  const BlockContent = styled.div`
    width: 431px;
    height: 390px;
    margin: 415px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between

`

export  const ErrorH2 = styled.h2`
    font-weight: 400;
    font-size: 160px;
    line-height: 168px;
    color: #FFFFFF;
`

export  const TitleBox = styled.div`
    display: flex;
    gap: 15px;
`

export  const smileSvg = styled.img`
    
`

export  const titleH3 = styled.h3`
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
`

export  const description = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.003em;
    color: #4E4E4E;
`

export  const buttonMeinPages = styled.button`
    width: 278px;
    height: 52px;
    background: #580EA2;
    border-radius: 6px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
    cursor: pointer;
`