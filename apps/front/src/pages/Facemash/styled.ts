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

export const SidesWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    alignitems: center;
`

export const Side = styled.div<{ separator?: boolean }>`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    ${({ separator }) => separator && "border-right-style: dashed"}
`
