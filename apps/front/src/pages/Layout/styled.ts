import { styled } from "styled-components"

export const LogoWrapper = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%) translateY(-40px);
    text-align: center;
    & div {
        transform: translateY(-50px);
        color: black;
        front-weight: bold;
    }
`
