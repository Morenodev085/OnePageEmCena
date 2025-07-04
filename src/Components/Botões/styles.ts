import styled from "styled-components";
import { color } from "../../styled";

export const ButtonsLinks = styled.a`
  width: 48%; 
  text-decoration: none;
  border-radius: 8px;
  height: 100%; /* <-- adiciona isso */
  display: flex; /* necessário para que ButtonsBody ocupe toda a altura */

  @media (max-width: 768px) {
    width: 100%; /* em mobile ocupa a linha toda */

  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: column;

@media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
}
`

export const ButtonsBody = styled.button`
  padding: 32px;
  border-radius: 8px;
  border: none;
  width: 100%;
  background-color: ${color.darckblue};
  color: ${color.white};
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  height: 100%;
  flex: 1; /* <-- adiciona isso */

  &:hover {
    background-color: ${color.midblue};
  }

  &.section-title {
    cursor: default;
    background-color: ${color.midblue};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 12px;
    padding: 24px;

  }
`;


export const ButtonsLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4%; /* espaço entre os botões */
  margin-top: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;

  }
`;