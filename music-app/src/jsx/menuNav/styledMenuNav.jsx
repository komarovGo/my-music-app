import styled from "styled-components"


export  const mainNav  = styled.nav`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`

export  const navLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`

export  const logoImage = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
`

export  const navBurge = styled.div`
    cursor: pointer;
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
`

export  const burgeLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #D3D3D3;
`

export  const navMenu = styled.div`
    display: block;
    visibility: visible;
`

export  const menuList = styled.ul`
    padding: 18px 0 10px 0;
`
export  const menuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`
export  const menuLink = styled.a`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`