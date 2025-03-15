import { styled } from "styled-components"

export const SidesWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    alignitems: center;
`

export const Side = styled.div<{ $separator?: boolean }>`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    ${({ $separator }) => $separator && "border-right-style: dashed"};
`
