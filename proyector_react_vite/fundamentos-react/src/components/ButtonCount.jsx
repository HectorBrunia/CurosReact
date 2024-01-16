import { useState } from "react";



const ButtonConunt = ()=>{

    const [count,setCount] = useState(0);
  

    const handleClick = ()=>{
        
        setCount(count+1);
    }
    return <button onClick={handleClick}>estado del boton {count}</button>
}
export default ButtonConunt