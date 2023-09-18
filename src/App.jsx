import { useEffect, useState } from "react"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"

function App() {

  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes"))|| [])
     /*{
        nombre: "Lucas",
        propietario: "Juan",
        email: "asldkjsad",
        alta: "2021/01/01",
        sintomas: "lskdjalsjkd"

        const borrarLocal=()=>{
      localStorage.removeItem
    }
      }*/
    const guardar=()=>{
      localStorage.setItem("pacientes", JSON.stringify(pacientes))
    }

    

    useEffect(()=>{
      guardar()
    }, [pacientes])
    

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes} />
      </div>

    </div>
  )
}

export default App
