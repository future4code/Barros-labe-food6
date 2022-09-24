import styled from 'styled-components';


export const CategoryName = styled.span `
    width: 87px;
    height: 18px;
    margin: 0 8px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
     line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
`
export const FilterCategory = styled.div `

`
// tudo abiaxo faz parte do input de filtragem por nome //
export const Label = styled.label `   // esse label aqui é mais pra parte de acessibilidade, se a pessoa clicar na lupa o input ativa
`  
export const Icon_Search = styled.img `
    width: 24px;
    height: 24px;
    margin: 0 15.3px 0 0;
    object-fit: contain;
`
export const InputFilter = styled.input `
    width: 263.6px;
    height: 18px;
    margin: 3px 0 3px 15.3px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #d0d0d0;
`
export const DivImput = styled.div `
    width: 328px;
    height: 56px;
    padding: 16px 8px 16px 17px;
    margin: 10px 0;
    border-radius: 2px;
    border: 1px solid #b8b8b8;
    display: flex;
`
/// --  ------ /// ----------------- //-- /
// -------- / / Tudo abaixo faz parte do card dos restaurantes /// -------------------//
export const Img = styled.img `
    width: 328px;
    height: 120px;
    margin: 0 0 12px;
    border-radius: 8px;
`
export const Restaurant_Card = styled.div `
    width: 328px;
    height: 188px;
    margin: 10px auto;
    border-radius: 8px;
    border: 1px solid #b8b8b8;
` 
export const Restaurant_Contain = styled.div `
    width: 375px;
    height: 667px;
    overflow-y: scroll;
`
// ------- ;;; --------------- /// ------------ ///

export const ContainerLogin = styled.div`
    margin: 0 auto;
    width: 375px;
    height: 667px;
    box-sizing: border-box;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
`