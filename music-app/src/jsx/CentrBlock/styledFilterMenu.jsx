import styled from "styled-components"


export  const centerblockFilter = styled.div`
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
    margin-bottom: 51px;
`

export  const filterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`

export  const filterButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #FFFFFF;
    border-radius: 60px;
    padding: 6px 20px;
        :hover{
            cursor: pointer;
            color: #B672FF;
            border: 1px solid #B672FF;
        }
        :not(:last-child) {
            margin-right: 10px;
}
`

export  const clickFilterMenu = styled.div`
    display: flex;
    justify-content: space-between;
`