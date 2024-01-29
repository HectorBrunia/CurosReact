import { useState } from "react";
import Swal from "sweetalert2";



const Formulario = ({addTodo})=>{
    
    const [todo, setTodo] = useState({
        title : "Tarea #001",
        description: "Breve descripcion sobre lo que se desea efectuar con la tarea #001",
        state: "Pendiete",
        priority: false
    })

    const [error, setError] = useState("");
    const {title,description,state,priority} = todo;

    const handleSumbit = (e) => {
        e.preventDefault();
        setError("");
        if (!title.trim() || !description.trim()){
            console.log("Datos incompletos");
            return Swal.fire({
                title: "Error!",
                text: "Título y descripción son obligatorios",
                icon: "error",
            });
            
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state ==='completado'
        })
        return Swal.fire({
            position:"center",
            title: "La tare se agrego correctamente",
            showComfirmButton: false,
            icon: "success",
            timer: 1500
        });
    }


    const handleChange = (e) =>{
        const {name, type, value, checked} = e.target
        setTodo({
            ...todo, 
            [name]: type !=="checkbox" ? value:checked});
    }
    const PintarError = () => (
        <div className="alert alert-danger">Todos los campos obligatorios</div>
      );

    return (
        <form onSubmit={handleSumbit}>
            <input type="text" placeholder="Ingrese la tarea"
             className="form-control mb-2" name="title"
             value={title}
             onChange={(e)=> handleChange(e)}
             />
            <textarea 
            className="form-control mb-2"
             placeholder="Descripcion"
             name="description"
             value={description}
             onChange={(e)=> handleChange(e)}
             />
             <div className="form-check mb-2">
                <input type="checkbox"
                name="priority"
                className="form-check-input"
                id="inputcheck"
                checked= {priority}
                onChange={(e)=>setTodo({...todo, priority: e.target.checked})} />
             </div>
             <select className="form-select mb-2" name="state" 
             value={state}
             onChange={(e)=>handleChange(e)}>
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
             </select>
             <button type="sumbit" className="btn btn-primary">
                Prosecasr
                </button>
            {error!=="" && <PintarError></PintarError> }
        </form>
    )
}

export default Formulario