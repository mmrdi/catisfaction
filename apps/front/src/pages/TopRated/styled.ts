import { styled } from "styled-components"

export const Gallery = styled.div.attrs<{ size?: string }>(props => ({
    size: props.size || "200px"
}))`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(
        auto-fill,
        minmax(${({ size }) => size}, 1fr)
    );
    gap: 5px;

    & img {
        width: 100%;
        height: ${({ size }) => size};
        object-fit: cover;
        border-radius: 25px;
    }
    & div > div {
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
