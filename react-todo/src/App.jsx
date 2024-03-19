import TodoCreate from "./components/TodoCreate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputer";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const initialToDoList = [
    { id: 1, title: "Complete online Javascript course", completed: true },
    { id: 2, title: "Jog arround the park 3x", completed: false },
    { id: 3, title: "10 minutes of metitation", completed: false },
    { id: 4, title: "read fro 1 hour", completed: false },
    { id: 5, title: "Pick up groseries", completed: false },
    { id: 6, title: "Complete Todo app on Frontent Mentor", completed: false },
];

localStorage.toDo = [...initialToDoList];

export default function App() {
    const [todos, setTodo] = useState(initialToDoList);

    useEffect(() => {
        localStorage.toDo = [...todos];
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            complete: false,
        };
        setTodo([...todos, newTodo]);
    };
    const updateTodo = (id) => {
        setTodo(
            todos.map((todo) =>
                todo.id == id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const removeTodo = (id) => {
        setTodo(todos.filter((todo) => todo.id !== id));
    };
    const clearCompleted = () => {
        setTodo(todos.filter((todo) => !todo.completed));
    };
    const leftComputerTodo = todos.filter((todo) => !todo.completed).length;

    const [filter, setFilter] = useState("all");
    const filterTodo = () => {
        switch (filter) {
            case "all":
                return todos;
            case "completed":
                return todos.filter((todo) => todo.completed);
            case "active":
                return todos.filter((todo) => !todo.completed);
            default:
                break;
        }
    };

    const setFilterTodo = (filter) => {
        setFilter(filter);
    };

    return (
        <>
            <div
                className="min-h-screen min-w-max bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')]
                bg-contain bg-no-repeat 
                dark:bg-gray-800 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]"
            >
                <Header />

                <main className="container">
                    <TodoCreate createTodo={createTodo} />

                    <TodoList
                        todos={filterTodo()}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                    />

                    <TodoComputed
                        leftComputerTodo={leftComputerTodo}
                        clearCompleted={clearCompleted}
                    />

                    <TodoFilter setFilterTodo={setFilterTodo} filter={filter} />
                </main>

                <footer className="mt-8 text-center">drag and drop</footer>
            </div>
        </>
    );
}
