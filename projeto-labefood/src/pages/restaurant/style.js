import styled from 'styled-components';

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerSpace = styled.div`
    width: 328px;
    height: 100%;
`

export const ContainerRestaurant = styled.div`
    width: 375px;
    height: 667px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const TittleRestaurant = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h2{
        font-size: 16px;
        font-weight: bold;
    }
    img{                                   // img do button back
        width: 40px;
        height: 40px;
        position: absolute;
        left: 10px;
    }
`

export const MainRestaurant = styled.div`
    width: 100%;
    height: 603px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 328px;
        height: 20%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    
`

export const InfoRestaurant = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    div{
        font-size: 16px;
        display: flex;
        align-items: center;
        p{
            margin-left: 70px;
            color: #b8b8b8;
        }
    }
    span{
        font-size: 16px;
        color: #b8b8b8;
    }
    h3{
        color: #e86e5a;
        font-size: 16px;
    }
`

export const ProductsCamp = styled.div`
    width: 100%;
    height: 55%;
    overflow-y: auto;
` 

export const ModalCamp = styled.div`
    width: 376px;
    height: 667px;
    background: black;
    position: absolute;
    background: rgba(1,1,1,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    display: none;
`;

export const ModalContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    h2{
        margin: 30px 0;
        font-size: 16px;
    }
    select{
        border: 1px solid black;
        border-radius: 4px;
        width: 296px;
        height: 56px;
        option{
          
        }
    }
    button{
        margin: 30px 0;
        font-size: 16px;
        color: #4a90e2;
        text-transform: uppercase;
        position: relative;
        top: 20px;
        left: 50px;
    }
`

export const ModalSide = styled.div`
    width: 100%;
    height: 30%;
`