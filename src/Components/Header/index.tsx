import EmCenaLogo from '../../assets/images/logo_niteroiEmCena-removebg.png'
import { Container } from '../../styled'
import { Logo } from './styles'

const Header = () => {
    return (
        <Container>
            <Logo src={EmCenaLogo} alt="Nitéroi em cena" />
        </Container>
    )
}

export default Header