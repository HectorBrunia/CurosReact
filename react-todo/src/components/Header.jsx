import Moon from "./icons/Moon"
const Header = () => { 
    return(
        <header className="container mx-auto p-4">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl 
          font-semibold tracking-[0.5em]">
            ToDo
          </h1>
          <button><Moon></Moon></button>
        </div>
      </header>
    )
 }
 export default Header