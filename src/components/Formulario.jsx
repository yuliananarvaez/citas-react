import { useEffect, useState } from "react"
import Alerta from "./Alerta";

const Formulario = ({ pacientes, setPacientes, paciente }) => {

    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
        if(Object.keys(paciente).length !==0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

const generarId=()=>{
    return Math.random().toString(32).substring(2)
}

console.log(generarId())

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, alta, sintomas].includes("")) {
            return setAlerta({
                error: true,
                mensaje: "Debes llenar todos los campos"
            })
        }

        setAlerta({
            error: false,
            mensaje: "Paciente registrado"
        })
        const nuevoPaciente={
            nombre,
                    propietario,
                    email,
                    alta,
                    sintomas,
                    id:generarId()
        }

        setPacientes(
            [
                ...pacientes,
                
                    nuevoPaciente
                
            ]
        )

        setNombre("")
        setPropietario("")
        setEmail("")
        setAlta("")
        setSintomas("")

        setTimeout(() => {
            setAlerta({})
        }, 3000);
    }

    const { mensaje } = alerta;

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-5">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

            <form className="bg-white shadow-sm rounded-lg py-10 px-5"
                onSubmit={handleSubmit}
            >

                {mensaje && (<Alerta error={alerta.error} mensaje={mensaje} />)}

                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Nombre de la Mascota" name="nombre" id="nombre"
                        onChange={(e) => {
                            setNombre(e.target.value)
                        }
                        }
                        value={nombre} />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input type="text" className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Nombre del Propietario" name="propietario" id="propietario" onChange={e => { setPropietario(e.target.value) }} value={propietario} />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email Propietario</label>
                    <input type="email" className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Email Propietario" name="email" id="email" value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha_alta" className="block text-gray-700 uppercase font-bold">Fecha Alta</label>
                    <input type="date" className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" name="fecha_alta" id="fecha_alta" value={alta} onChange={e => { setAlta(e.target.value) }} />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea className="shadow-lg border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Sintomas de la Mascota" name="sintomas" id="sintomas" value={sintomas} onChange={e => setSintomas(e.target.value)} />
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-all" value="Agregar Paciente" />

                
            </form>

        </div>
    )
}

export default Formulario