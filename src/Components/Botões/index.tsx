import { Container } from "../../styled"
import { ButtonsArea, ButtonsBody, ButtonsLinks, ButtonsLinksWrapper, Text, TextWrapper } from "./styles"

const Buttons = () => {
    return (
        <Container>
            {/* Grupo Mostras Cenas Curtas */}
            <ButtonsArea>
                <TextWrapper>
                    <Text><strong>MOSTRA CENAS CURTAS</strong></Text>
                </TextWrapper>
                <ButtonsLinksWrapper>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Regulamento </ButtonsBody>
                    </ButtonsLinks>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Inscrição</ButtonsBody>
                    </ButtonsLinks>
                </ButtonsLinksWrapper>
            </ButtonsArea>

            {/* Grupo Mostra Estudantil */}
            <ButtonsArea>
                <TextWrapper>
                    <Text> <strong>MOSTRA ESTUDANTIL</strong> </Text>
                </TextWrapper>
                <ButtonsLinksWrapper>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody >Inscrição</ButtonsBody>
                    </ButtonsLinks>
                </ButtonsLinksWrapper>
            </ButtonsArea>
        </Container>
    )
}

export default Buttons