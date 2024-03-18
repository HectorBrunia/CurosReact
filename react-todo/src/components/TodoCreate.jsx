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
            className="mx-auto mt-8 flex  w-[350px] gap-4 overflow-hidden rounded-md bg-white p-4"
        >
            <span className="h-6 w-6 rounded-full border-2 border-gray-300"></span>
            <input
                className="w-full outline-none"
                type="text"
                placeholder="Crea tu nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
export default TodoCreate;
