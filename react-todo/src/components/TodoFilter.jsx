const TodoFilter = () => { 
    return( 
        <section className="bg-white rounded-md w-[350px] container mx-auto mt-8 p-4 flex justify-center gap-4 shadow-lg shadow-gray-900/40" >
          <button className="text-blue-500">All</button>
          <button className="hover:text-blue-500">Active</button>
          <button className="hover:text-blue-500">Complete</button>
        </section>
    )
 }
 export default TodoFilter