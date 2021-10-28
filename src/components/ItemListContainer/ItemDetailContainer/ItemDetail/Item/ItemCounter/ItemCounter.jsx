//Style
import "./ItemCounter.css"

//Component
import { useState } from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

//Utilities
import { Link } from "react-router-dom";


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
        (stockDisponible <= 0) ? (<div className="Modal">
                <div style={{zIndex:333}} className="ModalContainer">
                <Link exact to="/categoria">
                            <span>VOLVER</span> 
                            </Link>
                                <h2 style={{width:"80%", textAlign:"center"}}>Parece que no tenemos stock del producto que solicitaste</h2>
                                <p>Pero no te preocupes...</p>
                                <p>¡Tenemos mucha más ropa para completar tu look!</p>
                                <p>Haciendo click en volver podrás ver todos los productos que tenemos para vos</p>
                            <h1 className="Firma"><b> Las Chuecas <i class="far fa-heart"></i></b></h1>
                </div>
            </div> )  : "" 
        }
        <div className="contador">
            <button  className="buttonStyle" style= {{width:"3vw"}} onClick={AddOneProduct}>+</button>
            <input  className="cardCounter" type="number" name="" value= {count} disabled/>
            <button className="buttonStyle" style= {{width:"3vw"}} onClick={RestOneProduct}>-</button>
        </div>
            <p className="detalles">Stock disponible: {producto.stock} unidades</p>
        <AddToCartButton item= {producto} stock={producto.stock} count={count} onAdd={onAdd} />
    </>
)
}

export default ItemCounter;

