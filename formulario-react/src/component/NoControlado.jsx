import { useRef, useState } from "react";




const NoControlado = ()=>{

    const form = useRef(null)

    const [error, setError] = useState("");

    const handleSumbit = (e) => {

        e.preventDefault();
        setError("")
        const data = new FormData(form.current)

        const {title, description, state} = Object.fromEntries([...data.entries()])
        

        if (!title.trim() || !description.trim() || !state.trim()) return setError("Debes llenar todos los campos");
        
        console.log(title, description, state);
    }

    return (
        <form onSubmit={handleSumbit} ref={form}>
            <input type="text" placeholder="Ingrese la tarea"
             className="form-control mb-2" name="title"
             defaultValue="Tareea #001"
             />
            <textarea className="form-control mb-2"
             placeholder="Descripcion"
             name="description" defaultValue="tarea pero muuuuyyy chula"/>
             <select className="form-select mb-2" 
             name="state" defaultValue="pendiente">
                <option value="pendiente">Pendiente</option>
                <option value="completada" selected>Completada</option>
             </select>
             <button type="sumbit" 
             className="btn btn-primary">Prosecasr</button>
            {error !=="" && error }
        </form>
    )
}

export default NoControlado