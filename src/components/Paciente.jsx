const Paciente = ({paciente, pacientes, setPacientes}) => {

    const {nombre, propietario, email, alta, sintomas, id} = paciente

    const eliminarPacientes=(id)=>{
        const pacientesActualizados=pacientes.filter((pacienteState, index)=>index!==id);
        setPacientes(pacientesActualizados)
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                <span className="text-2xl font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
                <span className="text-2xl font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">EmaiL:
                <span className="text-2xl font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
                <span className="text-2xl font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
                <span className="text-2xl font-normal normal-case">{sintomas}</span>
            </p>
            <button type="button" className="bg-red-500 p-3  text-white rounded-md uppercase
            hover:bg-red-600" onClick={()=>{eliminarPacientes(id)}}>ELIMINAR</button>
        </div>
    )
}

export default Paciente;