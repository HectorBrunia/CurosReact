import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TodoCreate from "./components/TodoCreate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputer";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};
const initialTodos = localStorage.toDo && JSON.parse(localStorage.toDo);

export default function App() {
    const [todos, setTodo] = useState(initialTodos);

    useEffect(() => {
        localStorage.toDo = JSON.stringify(todos);
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
    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodo((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };
    return (
        <>
            <div
                className="font-body dark:bg-VeryDarkBlue bg-VeryLightGrayishBlue  bg-
                 min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat text-lg
                dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
                md:bg-[url('./assets/images/bg-desktop-light.jpg')]
                md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
            >
                <Header />

                <main className="font-body container m-auto text-lg md:max-w-2xl">
                    <TodoCreate createTodo={createTodo} />
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <TodoList
                            todos={filterTodo()}
                            updateTodo={updateTodo}
                            removeTodo={removeTodo}
                        />
                    </DragDropContext>

                    <TodoComputed
                        leftComputerTodo={leftComputerTodo}
                        clearCompleted={clearCompleted}
                        setFilterTodo={setFilterTodo}
                        filter={filter}
                    />
                </main>

                <footer className="mt-8 text-center text-gray-400">
                    drag and drop to reorder list
                </footer>
            </div>
        </>
    );
}
