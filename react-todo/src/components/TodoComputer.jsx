const TodoComputed = ({ leftComputerTodo, clearCompleted }) => {
    return (
        <section className="gap4 mx-auto flex w-[350px] rounded-b-md bg-white p-4 shadow-lg shadow-gray-900/40 dark:bg-gray-700">
            <span className="grow text-gray-400">
                {leftComputerTodo} items left
            </span>
            <button onClick={() => clearCompleted()} className="text-gray-400">
                Clear completed
            </button>
        </section>
    );
};
export default TodoComputed;
