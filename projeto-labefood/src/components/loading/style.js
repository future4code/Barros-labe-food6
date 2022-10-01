import styled, { keyframes } from 'styled-components';

const animLoading = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
`

export const AnimLoading = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 10px solid rgb(220,116,100);
    border-top: 10px solid transparent;
    animation: ${animLoading} .5s linear infinite;
    position: absolute;
    right: 165px;
    margin: 65px 0;
`