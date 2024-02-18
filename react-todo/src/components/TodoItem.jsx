import Cross from "./icons/cross"
const TodoItem = () => { 
    return (
        <article className="bg-white flex gap-4  mb-1">
                <button className="border-gray-300 border-2 rounded-full w-6 h-6"></button>
                <p className="text-gray-500 grow">Texto de la tarea</p>
                <button className="flex-none"><Cross></Cross></button>
        </article>
    )
 }

 export default TodoItem