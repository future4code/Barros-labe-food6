import styled from "styled-components"

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Container = styled.div`
    width: 375px;
    height: 667px;
    justify-content: center;
    align-items: center;
    text-align: center;
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

export const Header = styled.div`
    width: 374px;
    height: 30px;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    position: relative;
    top: 0;
    margin-top: 20px;
    position: fixed;

    p{  
        font-family:'Roboto', sans-serif;
        text-align: center;
    }
`

export const DivDados=styled.div`
    display: grid;
    grid-template-columns: 1fr 20px;
    justify-items: start;
    margin: 0 30px;
    margin-top: 70px;

    .dados{
        margin-right: 120px;
        text-align: left;
    }
    .btn{
        
        button{
            img{
                width: 20px;
            }
        }
    }
`
export const DivEndereco=styled.div`
    display: grid;
    grid-template-columns: 1fr 20px;
    justify-items: start;
    background-color: #eeeeee;
    margin: 0 30px;
    margin-top: 20px;
    
    .endCadastrado{
        color: #b8b8b8;
        
    }
    
    p{
        text-align: left;
        font-size: 16px;
    }
`
export const DivHistorico=styled.div`
    display: grid;
    grid-template-columns: 1fr 20px;
    justify-items: start;
    margin: 0 30px;
    margin-top: 20px;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 1.25);
`

export const DivCard=styled.div`
    border-radius: 5px;
    border: 1px solid #b8b8b8;
    padding: 20px;
    margin: auto;
    margin-top: 20px;
    width: 300px;
    text-align: start;

  .restaurante{
    color: #e86e5a;
  }
  .valor{
    font-weight: bold;
    margin-top: 10px;
  }

`
