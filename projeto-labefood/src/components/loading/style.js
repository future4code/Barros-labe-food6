import styled, { keyframes }  from 'styled-components';

export const animLoading = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
`

 export const AnimLoading = styled.div`
    width:40px;
    height: 40px;
    border: 10px solid rgb(220,116,100);  
    border-top: 10px solid transparent;
    border-radius: 50%;
    animation: ${animLoading} .5s linear infinite;
`