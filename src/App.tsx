import Buttons from "./Components/Botões"
import Footer from "./Components/Footer"
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
      <Footer/>
    </>
  )
}

export default App
