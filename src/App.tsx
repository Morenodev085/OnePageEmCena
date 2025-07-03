import Buttons from "./Components/Botões"
import Header from "./Components/Header"
import Message from "./Components/Text"
import { EstiloGlobal } from "./styled"

function App() {

  return (
    <>
      <EstiloGlobal />
      <Header/>
      <Message/>
      <Buttons/>
    </>
  )
}

export default App
