import styled from 'styled-components';

export const ContainerLogin = styled.div`
    
`;

export const FotoRestaurante = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 130px;

`

export const NomeRestaurante = styled.div`
    color: #000000;
    font-size: 1.7em;
    font-weight: 500;
    text-align: center;
`

export const Card = styled.div`
    display: flex;
    width: 70%;
    border: solid 1px lightgray;
    flex-direction: column;
    border-radius: 10px;
    text-align: center;
    margin: 0 auto 2em;
    box-shadow: 1px 1px 2px gray;

        &:hover {
            cursor: pointer;
            transform: scale(1.01);
            transition: transform .2s;
        }
`

export const Grid = styled.div`
  width: 375px;
  height: 615px;
  display: grid;
  grid-template-rows: 60px 70px 42px 1fr auto;
  background-color: white;
  box-sizing: border-box;
  border: solid 1px lightgray;
  overflow-x: hidden;
  
`

export const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: top;
    height: 98vh;
    width: 98vw;
    
`

export const RodapeCard = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin: 0 10px 10px 20px;
`

export const RodapeDetalhe = styled.div`
  color: #000000;
`