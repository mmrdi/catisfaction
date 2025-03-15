import { styled } from "styled-components"

export const ImageStyled = styled.div<{ size: number }>`
    & img {
        width: 100%;
        height: ${({ size }) => `${size}px`};
        object-fit: cover;
        border-radius: 25px;
    }
    & div {
        text-align: center;
        background-color: rgba(255, 255, 255, 0.8);
        height: 70px;
        transform: translateY(-75px);
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 25px;
        font-weight: bold;
        color: #373434ca;
    }
`
