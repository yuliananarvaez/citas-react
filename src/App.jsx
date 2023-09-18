import { useState } from "react"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"

function App() {

  const [pacientes, setPacientes] = useState(
    [
      {
        nombre: "Lucas",
        propietario: "Juan",
        email: "asldkjsad",
        alta: "2021/01/01",
        sintomas: "lskdjalsjkd"
      }
    ])

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} />
      </div>

    </div>
  )
}

export default App
