import { Container } from "../../styled"
import { ButtonsLinks} from "./styles"

const Buttons = () => {
    return (
        <Container>
            <div>
                <ButtonsLinks href="">
                    <button>Mostras Cenas Curtas</button>
                </ButtonsLinks>
                <ButtonsLinks href="">
                    <button>Regulamento Mostras Cenas Curtas</button>
                </ButtonsLinks>
            </div>
            <div>
                <ButtonsLinks href="">
                    <button>Mostra Estudantil</button>
                </ButtonsLinks>
                <ButtonsLinks href="">
                    <button>Regulamento Mostra Estudantil</button>
                    </ButtonsLinks>
            </div>
        </Container>
    )
}

export default Buttons