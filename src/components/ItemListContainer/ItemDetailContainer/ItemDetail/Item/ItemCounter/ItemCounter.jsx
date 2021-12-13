//Botones + y - para agregar al carrito
import React from "react";
//Style
import "./ItemCounter.css"

//Component
import { useState } from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

//Utilities
import OutStock from "./OutStock/OutStock";


const ItemCounter = ({producto})=>{
    const [cantidadProductos, setCantidadProductos] = useState(0)
    const onAdd = (cant) => {
        setCantidadProductos(cant)
    }
    let stock = (producto.stock);
    const [count, setCount] = useState(1);
    let stockDisponible = (stock-count);
    const AddOneProduct = () => {
        if (count <= (stock - 1)){
            setCount(count + 1)
        }else {
            alert ("Lo siento, ¡No contamos con más stock!")
        }
    }
    const RestOneProduct = () => {
        if (count <= 1){
            return false;
        }else {
            setCount(count - 1)
        }
    }

return (
    <>
    {
        (stockDisponible <= 0) ? <OutStock/>  : "" 
        }
        <div className="contador">
            <button  className="buttonStyle" style= {{width:"3vw"}} onClick={AddOneProduct}>+</button>
            <input  className="cardCounter" type="number" name="" value= {count} disabled/>
            <button className="buttonStyle" style= {{width:"3vw"}} onClick={RestOneProduct}>-</button>
        </div>
            <p className="detalles">Stock disponible: {producto.stock} unidades</p>
        <AddToCartButton cantidadProductos={cantidadProductos} item= {producto} stock={producto.stock} count={count} onAdd={onAdd} />
    </>
)
}

export default ItemCounter;

