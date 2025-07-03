import { Container } from "../../styled"
import { ButtonsArea, ButtonsBody, ButtonsLinks} from "./styles"

const Buttons = () => {
    return (
        <Container>
            <ButtonsArea>
                <ButtonsLinks href="" target="_parent">
                    <ButtonsBody>Mostras Cenas Curtas</ButtonsBody>
                </ButtonsLinks>
                <ButtonsLinks href="" target="_parent">
                    <ButtonsBody>Regulamento Mostras Cenas Curtas</ButtonsBody>
                </ButtonsLinks>
            </ButtonsArea>
            <ButtonsArea>
                <ButtonsLinks href="" target="_parent">
                    <ButtonsBody>Mostra Estudantil</ButtonsBody>
                </ButtonsLinks>
                <ButtonsLinks href="" target="_parent">
                    <ButtonsBody>Regulamento Mostra Estudantil</ButtonsBody>
                    </ButtonsLinks>
            </ButtonsArea>
        </Container>
    )
}

export default Buttons