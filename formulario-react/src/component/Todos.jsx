import Todo from"./Todo"

const Todos =({todos, deleteTodo, updateTodo})=>{
    return ( <div>
        <h1 className="text-center">Lista de Tareas</h1>
        <ul className="list-group">
            {todos.map((todo) =>(
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            ))}
            {
                todos.length ===0 && (<li className="list-group-item text-center">
                    sin tareas</li>)
            }
        </ul>
    </div>
    )
}

export default Todos