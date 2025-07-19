import styled from "styled-components";
import { color } from "../../styled";

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: column;

@media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
}
`

export const ButtonsLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;

  }
`;

export const ButtonsLinks = styled.a`
  width: 100%; 
  text-decoration: none;
  border-radius: 8px;


  @media (max-width: 768px) {
    width: 100%; 

  }
`;

export const ButtonsBody = styled.button`
  padding: 22px;
  border-radius: 8px;
  border: none;
  width: 100%;
  background-color: ${color.green};
  color: ${color.white};
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  height: 100%;
  transition: 0.2s ease;

  &:hover {
    background-color: ${color.litlegreen};
  }

  &.section-title {
    cursor: default;
    background-color: ${color.litlegreen};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 12px;
    padding: 24px;

  }
`;

export const TextWrapper = styled.div`
  
  align-items: flex-end; /* <-- isso alinha os textos pela linha de baixo */
  height: 50px; /* ou qualquer altura fixa que funcione para o alinhamento */
  margin-top: 16px;
margin-bottom: 16px;
`;

export const Text = styled.p`
font-size: 22px;
text-align: center;
padding: 18px 18px;
/* color:	#A52A2A; */
`