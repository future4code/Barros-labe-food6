import styled from 'styled-components';

export const ContainerProduct = styled.div`
    width: 100%;
`;

export const TittleProducts = styled.div`
    width: 100%;
    font-weight: bold;
    h3{
        ::after{
            content:"";
            width: 100%;
            height: 2px;
            background: black;
            display: flex;
        }
       
    }
`

export const Products = styled.div`
    width: 100%;
    width: 328px;
    height: 112px;
    border: 1px solid #b8b8b8;
    margin: 10px 0;
    display: flex;
    position: relative;
    border-radius: 8px;
    div{
        width: 30%;
        img{
            width: 100%;
            height: 108px;
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
            border: 1px solid black;
        }
    }
`