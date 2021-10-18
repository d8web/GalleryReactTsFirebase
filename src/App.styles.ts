import styled from "styled-components";

export const Container = styled.div`
    background-color: #121214;
    color: #fff;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0px;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        margin-bottom: 20px;
        font-size: 50px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`

export const UploadForm = styled.form`
    background-color: #242526;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background: linear-gradient(
        269.94deg,#ff008e -7.44%,#8257e5 99.94%);
        transition: all .3s ease;
        outline: none;
        border: none;
        padding: 8px 32px;
        color: #fff;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        margin: 0 20px;

        &:hover {
            filter: hue-rotate(-35deg);
        }
    }
`