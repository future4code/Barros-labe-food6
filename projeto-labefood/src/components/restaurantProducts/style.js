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
    box-sizing: border-box;
    div{
        width: 30%;
        img{
            width: 100%;
            height: 108px;
            object-fit: cover;
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
        h3 {
            
            color: #e86e5a;
        }
        p{
            font-size: 14px;
            color: #b8b8b8;
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
            color: #000000;
        }
        #quantity {
            width: 33px;
            height: 33px;
            margin: 0 0 9px 16px;
            padding: 7px 12px;
            border-radius: 0px 8px 3px ;
            position: absolute;
            right: 15px;
            top: 0;
            border: 1px solid #e86e5a;
            span {
                width: 9px;
                height: 19px;
                font-family: Roboto;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: -0.39px;
                color: #e86e5a;
            }
        }
        #btnRemove {
            border: 1px solid #e02020;
            color: #e02020;
        }
        #price {
            width: 108px;
            height: 19px;
            margin: 6px 17px 6px 0;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 550;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.39px;
            color: #000;
        }
    }
`