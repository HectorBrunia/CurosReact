export default function App() {
  return (<>
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
     bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl 
          font-semibold tracking-[0.5em]">
            ToDo
          </h1>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg></button>
        </div>

        <form className=" w-96 container mx-auto rounded-md bg-white overflow-hidden mt-8 flex items-center py-2">
          <span className="h-6 w-6 mx-2 rounded-full border-2 border-gray-300 inline-block"></span>
          <input type="text" placeholder="Crea tu nueva tarea" />
        </form>
      </header>

      <main className="bg-white rounded-md w-96 container mx-auto mb-8 px-4 shadow-lg shadow-gray-900/40">
        <article className="flex justify-between py-2 border-b-[1px] border-gray-300">
          <button className="border-gray-300 border-2 rounded-full w-8 h-8"></button>
          <p>Texto de la tarea</p>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
        </article>
        <article className="flex justify-between py-2 text-left">
          <button className="border-gray-300 border-2 rounded-full w-8 h-8"></button>
          <p>Texto de la tarea a realizar que se </p>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
        </article>
        <article className="flex justify-between py-2">
          <button className="border-gray-300 border-2 rounded-full w-8 h-8"></button>
          <p>Texto de la tarea</p>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
        </article>
        <section className="flex justify-between opacity-50">
          <span>5 items left</span>
          <button>Clear completed</button>
        </section>
      </main>

      <section className="container mx-auto px-20 flex justify-between" >
        <button className="text-blue-500 font-medium">All</button>
        <button>Active</button>
        <button>Complete</button>
      </section>

    </div>
  </>
  )
}