import { Container } from "../../styled"
import { ButtonsArea, ButtonsBody, ButtonsLinks, ButtonsLinksWrapper, Text } from "./styles"

const Buttons = () => {
    return (
        <Container>
            {/* Grupo Mostras Cenas Curtas */}
            <ButtonsArea>
                <Text><strong>Mostra Cena Curta</strong></Text>

                {/* Container com os dois botões lado a lado */}
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
                <Text> <strong>Mostra Estudantil</strong> </Text>

                {/* Container com os dois botões lado a lado */}
                <ButtonsLinksWrapper>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Regulamento</ButtonsBody>
                    </ButtonsLinks>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Inscrição  </ButtonsBody>
                    </ButtonsLinks>
                </ButtonsLinksWrapper>
            </ButtonsArea>
        </Container>

    )
}

export default Buttons