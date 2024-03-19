import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");
    const handleSumbitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };
    return (
        <form
            onSubmit={handleSumbitAddTodo}
            className="mx-auto mt-10 flex  w-[350px] gap-4 overflow-hidden rounded-xl bg-white p-4 dark:bg-gray-700"
        >
            <span className="h-6 w-7 rounded-full border-2 border-gray-300 dark:border-gray-500"></span>
            <input
                className="w-full text-gray-300 outline-none dark:bg-gray-700"
                type="text"
                placeholder="Crea tu nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
export default TodoCreate;
