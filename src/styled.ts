import styled, { createGlobalStyle } from "styled-components"

export const color = {
creme: '#f9f9db',
preto: '#000',
Branco: '#fff'
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
    color: ${color.preto};
    overflow-x: hidden;
}
`

export const Botao = styled.button`
background-color: darkolivegreen;
`
