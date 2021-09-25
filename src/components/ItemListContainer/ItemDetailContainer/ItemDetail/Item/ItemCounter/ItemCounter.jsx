//Style
import "./ItemCounter.css"

//Component
import { useState } from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";


const ItemCounter = ({producto})=>{

    const [cantidadProductos, setCantidadProductos] = useState(0)

    const onAdd = (cant) => {
        console.log("Se agregaron "+ cant + " productos")
        setCantidadProductos(cant)
    }

    let stock = (producto.stock);
    const [count, setCount] = useState(1);

        function AddOneProduct (){
            if (count <= (stock - 1)){
                setCount(count + 1);
            }else {
                alert ("Lo siento, ¡No contamos con más stock!")
            }
        }
        function RestOneProduct (){
            if (count <= 1){
                return false;
            }else {
                setCount(count - 1)
            }
        }


    //Obtencion colores para el selector
        // const ColorSelector = ({producto}) =>{
        //     return(
        //         <>
        //         {producto.forEach(producto =>
        //         <option value="{producto.color.name}">{producto.color.name}</option>)}
        //         </>
        //     )
        // }

return (
    <>
    
        <div className="contador">
            <button  className="buttonStyle" style= {{width:"3vw"}} onClick={AddOneProduct}>+</button>
            <input className="cardCounter" type="number" name="" value= {count} disabled/>
            <button className="buttonStyle" style= {{width:"3vw"}} onClick={RestOneProduct}>-</button>
        </div>
        <AddToCartButton item= {producto} stock={producto.stock} count={count} onAdd={onAdd} />
        

    </>
)
}

export default ItemCounter;

