import styled from "styled-components"

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerCadastro = styled.div`
    width: 375px;
    height: 667px;
    display: grid;
    justify-content: center;
    align-items: center;
    border: 1px solid #b8b8b8;
`;

export const LoginCamp = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TittleLogin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        margin-top: 24px;
        width: 104px;
        height: 58px;
        margin-bottom: 24px;
        object-fit: contain;
    }
    span{
        width: 296px;
        height: 18px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
    }
`

export const InputCamp = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        
        input{
            width: 328px;
            height: 56px;
            font-size: 15px;
            border: 1px solid #b8b8b8;
            border-radius: 2px;
            background: none;
            padding-left: 16px;
            
            :focus{
                outline: 0;
               
            }
            ::placeholder{
                opacity: 0.4;
                font-size: 17px;
                position: relative;
            }
        }
        label{
            font-size: 15px;
            position: relative;
            right: 120px;
            top: 16px;
            width: 80px;
            z-index: 1;
            background: white;
            padding-left: 5px;
            color: #b8b8b8;
        }
    }    
`

export const ButtonCamp = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display:flex;
    flex-direction: column;
    button{
        width: 328px;
        height: 42px;
        font-size: 16px;
        margin: 10px;
        border-radius: 2px;
        border: none;
        background: rgb(220,116,100);
        font-weight: bold;
        cursor: pointer;
    }
    p{
        a{  
            font-weight: bold;
            cursor: pointer;
        }
    }
`
export const ButtonHeader = styled.button`
width: 25px;
height: 25px;
margin: 0 0 0px;
padding: 0 0 10px;

object-fit: contain;
background-color: transparent;
border: 0;
img{
width: 24px;
height: 24px;
margin: 25px;
margin-top: 15px;
}
&:hover{
    cursor: pointer;
}
`
export const Header = styled.div`
width: 370px;
height: 60px;
margin: 0 0 0px;
padding: 0 0 10px;
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #fff;
`