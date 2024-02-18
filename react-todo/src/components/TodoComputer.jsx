const TodoComputed = () => { 
    return(
        <section className="bg-white mx-auto w-[350px] p-4 rounded-b-md flex gap4 shadow-lg shadow-gray-900/40">
          <span className="text-gray-400 grow">5 items left</span>
          <button className="text-gray-400">Clear completed</button>
        </section>
    )
 }
 export default TodoComputed