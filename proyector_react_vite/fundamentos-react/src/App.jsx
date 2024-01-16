import MyButton from "./components/MyButton";
import WelcomeUser from "./components/WelcomeUser";
import ListFruts from "./components/ListFruts";
import ButtonConunt from "./components/ButtonCount";


const App = ()=>{
    const title = "Mi titulo desde una cosntante";
    const classTitle = "text-center";
    const pathImh = "https://picsum.photos/200/300";
    const user = true
    const fruits = ["🍕","🍟","🌭"]
    return (
        <>
            <ButtonConunt/>
            <h1 className={classTitle}>{title}</h1>
            <img src={pathImh} alt="" />
            <MyButton text = "boton 1 "/>
            <MyButton text = "boton 2 "/>
            <MyButton text = "boton  "/>
            <WelcomeUser user={user}/>
            <ListFruts fruts ={fruits}/>
        </>
    )
}
export default App