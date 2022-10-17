import styled, { keyframes } from "styled-components"

export const Logo = styled.img `
 animation-name: logoAnimation ;
 animation-duration: 1.4s;
 animation-iteration-count: infinite;
 animation-direction: alternate;
 animation-timing-function: ease-out;
`
export const Container = styled.div `
    background-color: #e86e5a;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes logoAnimation {
        to {
            transform: translateY(-20px) scale(1.2);
            filter: drop-shadow( 6px 6px 3px);
        }   
    }
`