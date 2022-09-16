import styled from 'styled-components';

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerLogin = styled.div`
    width: 375px;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
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
    margin-top: 32px;
    img{
        width: 104px;
        height: 58px;
        margin: 68px 128px 16px;
        object-fit: contain;
    }
    span{
        width: 296px;
        height: 18px;
        font-family: Roboto;
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
            margin: 10px;
            font-size: 15px;
            border: 1px solid grey;
            border-radius: 5px;
            background: none;
            z-index: 0;
            :focus{
                outline: 0;
            }
            ::placeholder{
                opacity: 0.4;
                font-size: 17px;
                position: relative;
                left: 16px;
            }
        }
        label{
            font-size: 15px;
            position: relative;
            right: 120px;
            top: 22px;
            width: 61px;
            z-index: 1;
            background: white;
            padding-left: 5px;
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
        font-size: 20px;
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
