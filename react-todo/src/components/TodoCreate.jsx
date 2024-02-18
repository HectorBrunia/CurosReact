const TodoCreate = () => { 
    return(
        <form className="rounded-md bg-white overflow-hidden w-[350px] mx-auto mt-8 flex gap-4 p-4">
          <span className="h-6 w-6 rounded-full border-2 border-gray-300"></span>
          <input className="w-full outline-none" type="text" placeholder="Crea tu nueva tarea" />
        </form>
    )
 }
 export default TodoCreate