import styled from "styled-components"


export  const mainSidebar  = styled.div`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
`

export  const sidebarPersonal = styled.div`
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
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    padding: 12px 0 15px 0;
`

export  const sidebarPersonalName = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-right: 16px;
`

export  const sidebarAvatar = styled.div`
    width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
`

export  const sidebarBlock = styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`

export  const sidebarList = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`

export  const sidebarItem = styled.div`
    width: 250px;
    height: 150px;
    :not(:last-child) {
    margin-bottom: 30px;
}
`

export  const sidebarLink = styled.a`
    width: 100%;
    height: 100%;
`

export  const sidebarImg = styled.img`
    width: 100%;
    height: auto;
`

// Скрывающий блок

export  const sidebarLoading = styled.img`
    bottom: 154px;
    position: relative;
    background-color: #313131;
    width: 250px;
    height: 150px;
`