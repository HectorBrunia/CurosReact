
const Todo = ({todo, deleteTodo, updateTodo}) =>{
    const {id, title, description, state, priority} = todo;

    return (<li className="list-group-item">{title}
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state&&"text-decoration-line-through"}`}>{title}</h5>
                    <p className={`${state&&"text-decoration-line-through"}`}>{description}</p>
                    <div className="d-flex gap-5">
                        <button onClick={()=>deleteTodo(id)} className="btn btn-sm btn-danger">eliminar</button>
                        <button onClick={()=>updateTodo(id)} className="btn btn-sm btn-primary">actualizar</button> 
                    </div>
                </div>
                <span className="badge text-bg-primary">{priority && 'prioritario'}</span>
            </div>
        </li>
        
    );
    
};
export default Todo;