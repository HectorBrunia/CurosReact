const TodoFilter = ({ setFilterTodo, filter }) => {
    return (
        <section className="container mx-auto mt-8 flex w-[350px] justify-center gap-4 rounded-md bg-white p-4 shadow-lg shadow-gray-900/40">
            <button
                onClick={() => setFilterTodo("all")}
                className={`hover:text-blue-500 ${filter === "all" && "text-blue-500"}`}
            >
                All
            </button>
            <button
                onClick={() => setFilterTodo("active")}
                className={`hover:text-blue-500 ${filter === "active" && "text-blue-500"}`}
            >
                Active
            </button>
            <button
                onClick={() => setFilterTodo("completed")}
                className={`hover:text-blue-500 ${filter === "completed" && "text-blue-500"}`}
            >
                completed
            </button>
        </section>
    );
};
export default TodoFilter;
