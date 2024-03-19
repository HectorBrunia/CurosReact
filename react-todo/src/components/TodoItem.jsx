import Cross from "./icons/cross";
import Check from "./icons/Check";
const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className=" flex w-[350px] items-center justify-center gap-4 border-b-[1px] bg-white  dark:border-gray-500  dark:bg-gray-700">
            <button
                className={`h-6 w-6 rounded-full   
                ${
                    completed
                        ? "border- flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "border-[1px] border-gray-300 "
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <Check />}
            </button>
            <p
                className={`w-10 grow text-ellipsis ${
                    completed
                        ? "text-gray-300  line-through  dark:text-gray-500"
                        : "text-gray-500 dark:text-gray-300"
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
