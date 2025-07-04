import { Container } from "../../styled"
import { Fundo, Text, Text2 } from "./styles"


const Message = () => {
    return (
        <Container>
            <Fundo>
                <Text>
                    Estão abertas as inscrições para a <strong>MOSTRA ESTUDANTIL</strong> e para a <strong>MOSTRA CENAS CURTAS</strong> do 18° Niterói em Cena,
                    que será realizado entre 16 e 28 de setembro de 2025!<br /><br />
                
                    A Mostra Estudantil será realizada na Sala Nelson Pereira dos Santos, nos dias 16, 17 e 18 de setembro, nos turnos da manhã e tarde.
                    Podem participar escolas e cursos livres de teatro do estado do Rio de Janeiro. Serão selecionadas, pelo menos, 60 cenas de até 8 minutos.
                    Reservaremos 20 ajudas de custo de R$ 500,00 para professores atuantes em Niterói, a fim de auxiliar na vinda de seus alunos.<br /><br />

                    A Mostra Cenas Curtas será realizada no Theatro Municipal de Niterói, nos dias 19, 20 e 21 de setembro. Serão selecionadas 15 cenas.
                    Cada uma receberá um cachê de participação de R$ 2.500,00,
                    além de concorrer ao Prêmio Júri Popular, que acrescentará R$ 2.000,00 ao valor do cachê da cena premiada (baixe o Regulamento)<br /><br />

                    As inscrições para as duas mostras são <strong>GRATUITAS</strong>. Basta preencher o formulário desejado, clicando no botão abaixo<br /><br />
                </Text>
                <Text2>
                    <span><strong>PRAZOS PARA SE INSCREVER: </strong> </span><br/>
                    <strong style={{ display: "block", marginTop: 8 }}>Mostra Cenas Curtas <br/> até 31 de julho</strong>
                    <strong style={{ display: "block", marginTop: 4 }}>Mostra Estudantil <br/> até 20 de agosto</strong>
                </Text2>
            </Fundo>
        </Container>
    )
}

export default Message