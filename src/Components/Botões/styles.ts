import styled from "styled-components";
import { color } from "../../styled";

export const ButtonsLinks = styled.a`
  width: 48%; 
  text-decoration: none;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%; /* em mobile ocupa a linha toda */
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-wrap: wrap; /* permite quebrar linha */
  gap: 16px;
  justify-content: space-between;



@media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
}
`

export const ButtonsBody = styled.button`
padding: 12px;
border-radius: 8px;
border: none;
width: 100%;
background-color: ${color.litlegreen};
color: ${color.white};
font-size: 16px;
cursor: pointer;

&:hover{
    background-color: ${color.green};
}
`