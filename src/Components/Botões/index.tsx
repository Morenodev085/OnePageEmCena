import { Container } from "../../styled"
import { ButtonsArea, ButtonsBody, ButtonsLinks, ButtonsLinksWrapper } from "./styles"

const Buttons = () => {
    return (
        <Container>
            {/* Grupo Mostras Cenas Curtas */}
            <ButtonsArea>
                <ButtonsBody as="div" className="section-title">Mostra Cena Curta</ButtonsBody>

                {/* Container com os dois botões lado a lado */}
                <ButtonsLinksWrapper>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Inscrição </ButtonsBody>
                    </ButtonsLinks>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Regulamento </ButtonsBody>
                    </ButtonsLinks>
                </ButtonsLinksWrapper>
            </ButtonsArea>

            {/* Grupo Mostra Estudantil */}
            <ButtonsArea>
                <ButtonsBody as="div" className="section-title">Mostra Estudantil </ButtonsBody>

                {/* Container com os dois botões lado a lado */}
                <ButtonsLinksWrapper>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Inscrição </ButtonsBody>
                    </ButtonsLinks>
                    <ButtonsLinks href="#" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Regulamento </ButtonsBody>
                    </ButtonsLinks>
                </ButtonsLinksWrapper>
            </ButtonsArea>
        </Container>

    )
}

export default Buttons