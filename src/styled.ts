import styled, { createGlobalStyle } from "styled-components"

export const color = {
    creme: '#f9f9db',
    black: '#000066',
    white: '#fff'
}


export const EstiloGlobal = createGlobalStyle`



*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif
}

body{
    background-color: ${color.creme};
    color: ${color.black};
    overflow-x: hidden;
}
`


export const Container = styled.div`
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;