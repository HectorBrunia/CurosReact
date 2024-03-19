import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <div className="mx-auto mt-6 flex h-auto w-[350px] flex-col items-center justify-center overflow-hidden rounded-t-md bg-white dark:bg-gray-700 [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};
export default TodoList;
