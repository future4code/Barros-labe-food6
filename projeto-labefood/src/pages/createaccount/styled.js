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
margin: -6px;
margin-top: 8px;
}
&:hover{
    cursor: pointer;
}
`
export const Header = styled.div`
width: 360px;
height: 30px;
margin: 0 0 0px;
padding: 0 0 10px;
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #fff;
`
/*




export const ContainerPrinc = styled.div`
   width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
  width: 360px;
  height: 640px;
  padding: 0 0 0px;
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


export const Title = styled.div`
width: 360px;
height: 42px;
margin: 16px 0 0;
padding: 12px 32px;
`

export const Text = styled.h1`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 296px;
 height: 18px;
 font-family: Roboto solid ;
 font-size: 16px;

`

export const Button = styled.div`
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 16px;
letter-spacing: -0.39px;
text-align: center;
color: #000;
transition: 0.5s;
&:hover{
    transform: scale(1.05);
    cursor: pointer;
}
button{
  width: 328px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #e86e5a
}
`

export const Subtitle = styled.span`
width: 5px;
height: 8px;
margin: 3px 234px 43px 16px;
font-family: Roboto;
font-size: 12px;
letter-spacing: -0.29px;
color: #b8b8b8;
`

export const ImageLogo = styled.img`
width: 150px;
margin-left: 100px;
`

export const Input = styled.input`
width: 300px;
height: 40px;
padding: 10px;
margin: 4px;
font-family: Roboto;
font-size: 16px;
letter-spacing: -0.39px;
color: grey
`
*/