import styled from 'styled-components';

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerRestaurant = styled.div`
    width: 375px;
    height: 667px;
    border: 2px solid black;
`;

export const TittleRestaurant = styled.div`
    width: 100%;
    height: 64px;
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img{
        width: 40px;
        height: 40px;
        position: absolute;
        left: 10px;
    }
`

export const MainRestaurant = styled.div`
    width: 100%;
    height: 603px;
    background: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 328px;
        height: 120px;
    }
`

export const InfoRestaurant = styled.div`
    width: 100%;
    height: 152px;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 10px;
    div{
        font-size: 16px;
        display: flex;
        align-items: center;
        p{
            margin-left: 70px;
        }
    }
    span{
        position: relative;
        left: 25px;
        font-size: 16px;
    }
    h3{
        color: crimson;
        position: relative;
        left: 25px;
        font-size: 16px;
    }
`

export const Products = styled.div`
    width: 100%;
    height: 100%;
    margin-left:35px;
    overflow-y: auto;
    h3{
        margin-left: 16px;
        ::after{
            content: "";
            width: 328px;
            height: 2px;
            background: black;
            display: flex;
        }
    }
` 

export const EachProducts = styled.div`
    width: 328px;
    height: 112px;
    border: 2px solid black;
    margin: 5px 0;
    display: flex;
    position: relative;
    border-radius: 8px;
    div{
        width: 30%;
        img{
            width: 100%;
            height: 112px;
        }
    }
    main{
        position: relative;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        left: 16px;
        p{
            font-size: 14px;
        }
        button{
            width: 90px;
            height: 31px;
            background: none;
            position: absolute;
            bottom: 0;
            right: 15px;
            border-bottom-right-radius:8px;
            border-top-left-radius:8px;
        }
    }
`
