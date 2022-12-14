import styled from "styled-components"

export const Header = styled.div`
width: 360px;
height: 64px;
margin: 0 0 16px;
padding: 0 0 10px;
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #fff;
`

export const ButtonHeader = styled.button`
width: 25px;
height: 25px;
margin: 10px 321px 0 16px;
object-fit: contain;
background-color: transparent;
border: 0;
img{
width: 24px;
height: 24px;
margin: -6px;
}
&:hover{
    cursor: pointer;
}
`

export const Container = styled.div`
width: 360px;
height: 640px;
padding: 0 0 0px;

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
margin-top: 2em;
width: 296px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: bold;
letter-spacing: -0.39px;
text-align: center;
color: white;
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

export const Input = styled.input`
width: 300px;
height: 40px;
padding: 10px;
margin: 4px;
font-family: Roboto;
font-size: 16px;
letter-spacing: -0.39px;
color: grey;
`

export const ContainerBase= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 1em 1em 3em black;
`