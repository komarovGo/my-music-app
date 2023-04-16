import styled from "styled-components"


export  const MainBlock = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #181818;
`
export  const CtnterBlock = styled.div`
    width: 400px;
    height: 450px;
    background: #FFFFFF;
    border-radius: 12px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center
`

export  const BlockImg  = styled.img`
    margin-bottom: 30px;
`

export  const Input  = styled.input`
    width: 278.5px;
    height: 40px;
    padding-left: 10px;
    font-weight: 400;
    font-size: 18px;
    outline: none;
    line-height: 24px;
    border: 1px solid #D0CECE;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
        ::placeholder{
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: -0.003em;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: #E1E1E1;
        }
`
   
export  const OstiumButton  = styled.button`
    cursor: pointer; 
    width: 278px;
    height: 52px;
    background: #580EA2;
    border-radius: 6px;
    font-weight: 400;
    font-size: 18px;
    margin-top: 35px;
    line-height: 24px;
    color: #FFFFFF;
        :hover{
        background: #3F007D; 
        }
        :active{
        background: #271A58;
        }
`

export  const RegisterButton  = styled.button`
    cursor: pointer; 
    width: 278px;
    height: 52px;
    left: 41px;
    top: 340px;
    border: 1px solid #D0CECE;
    border-radius: 6px;

    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
          :hover{
        background: #D0CECE;  
        }
        :active{
        background: #D9D9D9;
        }
`

export  const ErrorText = styled.h4`
    color: #3F007D;
    font-size: 10px;
    text-align: center;
    margin-top: -15px;
`

   