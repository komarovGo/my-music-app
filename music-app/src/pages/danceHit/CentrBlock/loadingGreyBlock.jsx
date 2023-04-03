import styled from "styled-components"

    const PlaylistLoading  = styled.div`
        position: relative;
        top: 51px;
        display: flex;
        align-items: center;
        gap: 14px;
        width: 1107px;
        height: 51px ;
`
    const PlaylistLoadingItem1 = styled.div`
        width: 51px;
        height: 51px ;
        background-color: #313131;
`
    const PlaylistLoadingItem2 = styled.div`
        width: 356px;
        height: 21px ;
        background-color: #313131;
`
    const PlaylistLoadingItem3 = styled.div`
        width: 279px;
        height: 21px ;
        background-color: #313131;
        margin-left: 20px;
`
    const PlaylistLoadingItem4 = styled.div`
        width: 320px;
        height: 19px ;
        background-color: #313131;
        margin-left: 47px;
`

function LoadingBlockGrey (){
    return(
        <PlaylistLoading>
            <PlaylistLoadingItem1/>
            <PlaylistLoadingItem2/>
            <PlaylistLoadingItem3/>
            <PlaylistLoadingItem4/>
        </PlaylistLoading>
    )
}


export default LoadingBlockGrey;