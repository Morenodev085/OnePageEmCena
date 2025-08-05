import { Container } from "../../styled"
import { ButtonsArea, ButtonsBody, ButtonsLinks, ButtonsLinksWrapper, Text, TextWrapper } from "./styles"

const Buttons = () => {
    return (
        <Container className="buttons-container">
            {/* Grupo Mostras Cenas Curtas */}
            <ButtonsArea>
                <TextWrapper>
                    <Text><strong>MOSTRA CENAS CURTAS</strong></Text>
                </TextWrapper>
                <ButtonsLinksWrapper>
                    <ButtonsLinks href="https://drive.google.com/file/d/18KfoXXjqTyUhUWsUwcKr29AKO_cgsIdS/view?usp=sharing">
                        <ButtonsBody>Regulamento </ButtonsBody>
                    </ButtonsLinks>
                    <ButtonsLinks href="https://drive.google.com/file/d/1BY96efgPJUl6kbXQF4GiRu1vrKKWGnA_/view?usp=sharing" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>RESULTADO</ButtonsBody>
                    </ButtonsLinks>
                </ButtonsLinksWrapper>
            </ButtonsArea>

            {/* Grupo Mostra Estudantil */}
            <ButtonsArea>
                <TextWrapper>
                    <Text> <strong>MOSTRA ESTUDANTIL</strong> </Text>
                </TextWrapper>
                <ButtonsLinksWrapper>
                    <ButtonsLinks href="https://forms.gle/Aogxqu3XZMDivKpn8" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody >INSCREVA-SE</ButtonsBody>
                    </ButtonsLinks>
                </ButtonsLinksWrapper>
            </ButtonsArea>
        </Container>
    )
}

export default Buttons