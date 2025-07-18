import styled, { createGlobalStyle } from "styled-components"

export const color = {
    creme: '#F5E1BB',
    black: '#593F3D',
    white: '#fff',

    blue: '#2355ba',
    darckblue: '#000066',
    midblue: '#003399',

    green: '#969654',
    litlegreen: '#b2b27a',
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
    column-gap: 64px;
    align-items: flex-start;

&.buttons-container {
    gap: 32px;


    @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;}
}
`;