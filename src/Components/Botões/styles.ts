import styled from "styled-components";
import { color } from "../../styled";

export const ButtonsLinks = styled.a`
 background-color:azure ;
 margin-bottom: 16px;
 width: 100%;
 `

export const ButtonsArea = styled.div`
display: flex;
flex-direction: column;

@media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
}
`

export const ButtonsBody = styled.button`
padding: 12px;
border-radius: 8px;
border: none;
width: 100%;
background-color: ${color.blue};
color: ${color.white};
font-size: 16px;
cursor: pointer;

&:hover{
    background-color: ${color.darckblue};
}
`