const MyButton = ({text})=> {
    const click = (text) => {
        console.log("se ckickeo el boton "+text)
    }
    return <button onClick={()=>click(text)} >{text}</button>

}
export default MyButton;