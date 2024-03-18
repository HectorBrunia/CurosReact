import Cross from "./icons/cross";
import Check from "./icons/Check";
const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="mb-1 flex gap-4  bg-white">
            <button
                className={`h-6 w-6 rounded-full   border-2 border-gray-300 
                ${
                    completed &&
                    "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <Check />}
            </button>
            <p
                className={`grow ${
                    completed ? "text-gray-300  line-through" : "text-gray-500 "
                }`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <Cross />
            </button>
        </article>
    );
};

export default TodoItem;
