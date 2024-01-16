import ItemFrut from "./Fruts";

const ListFruts = (props)=> {
    return   <ul>
        {props.fruts.map((frut,index)=>(
            <ItemFrut key= {index} frut={frut}></ItemFrut>
        ))}
    </ul>
}
export default ListFruts
