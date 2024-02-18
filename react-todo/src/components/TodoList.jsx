import TodoItem from "./TodoItem"
const TodoList = () => { 
    return(
        <div className="w-[350px] mx-auto rounded-t-md   mt-8 [&>article]:p-4">
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div>
    )
 }
 export default TodoList