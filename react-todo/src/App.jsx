import TodoCreate from "./components/TodoCreate"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import TodoComputed from "./components/TodoComputer"
import TodoFilter from "./components/TodoFilter"
export default function App() {
  return (<>
    <div className="bg-gray-100 min-w-max bg-[url('./assets/images/bg-mobile-light.jpg')]
     bg-contain bg-no-repeat min-h-screen">
      <Header></Header>

      <main className="container">
        <TodoCreate></TodoCreate>
        <TodoList></TodoList>
        {/*TodoComputed */}
        <TodoComputed></TodoComputed>

        {/*TodoFilter */}
        <TodoFilter></TodoFilter>
      </main>
      

      <footer className="mt-8 text-center">drag and drop</footer>

    </div>
  </>
  )
}