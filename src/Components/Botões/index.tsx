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
                    <ButtonsLinks href="https://drive.google.com/file/d/1_i5mHMMDSR5bX5a2rZh6KyIGDMFqag6C/view?usp=sharing" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody>Regulamento </ButtonsBody>
                    </ButtonsLinks>
                    <ButtonsLinks href="https://forms.gle/jzjRaLkQkXfaSHP47" target="_parent" rel="noopener noreferrer">
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
                    <ButtonsLinks href="https://forms.gle/Aogxqu3XZMDivKpn8" target="_parent" rel="noopener noreferrer">
                        <ButtonsBody >Inscrição</ButtonsBody>
                    </ButtonsLinks>
                </ButtonsLinksWrapper>
            </ButtonsArea>
        </Container>
    )
}

export default Buttons