import { styled } from "styled-components"

export const BNStyled = styled.div`
    position: fixed;
    bottom: 0;
    color: rgba(255, 255, 255, 0.87);
    background: #242424;
    height: 100px;
    min-width: 320px;
    left: 50%;
    transform: translateX(-50%);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-style: solid;
    border-bottom-style: unset;
    border-color: rgba(255, 255, 255, 0.5);
    border-width: 1px;
    box-shadow: rgba(100, 100, 100, 0.5) 0px 0px 10px 0px;
    & div {
        text-align: center;
        padding: 10px;
    }
`
