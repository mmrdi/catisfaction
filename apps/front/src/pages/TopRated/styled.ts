import { styled } from "styled-components"

export const Gallery = styled.div.attrs<{ size?: number }>(props => ({
    size: props.size || 400
}))`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(
        auto-fill,
        minmax(${({ size }) => `${size}px`}, 1fr)
    );
    gap: 15px;
`
