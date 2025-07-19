import styled from "styled-components";
import { color } from "../../styled";

export const Borda = styled.div`
height: 1px;
width: 100%;
background-color: ${color.darckblue};
`

export const Logo = styled.img`
  width: 80%;
  max-width: 256px;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 60%;
    max-width: 180px;
  }
`;
