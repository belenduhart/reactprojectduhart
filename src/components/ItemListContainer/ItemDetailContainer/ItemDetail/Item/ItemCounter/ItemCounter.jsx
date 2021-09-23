import "./ItemCounter.css"
import { useState } from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ItemCounter = ({producto})=>{
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
    <div className="cardStyle2">
        <div className="counterCointainer">
        <img className="cardImage2" src={producto.picture} alt={producto.name} />
        <p className="tituloProducto">{producto.name}</p>
        <p className="detalles">Precio: ${producto.price}.-</p>
        <p className="detalles">Stock disponible: {producto.stock} unidades</p>
        </div>
        <div className="counterCointainer">
            {/* Seleccion de colores a desarrollar proximamente */}
            <div className="selectores">
            <div className="sizeSelector"> 
            Color :
            <select className="colorselector" name="Colores">
                <option value="ejemplo"> Ejemplo </option>
            {/* <ColorSelector/> */}
            </select>
            </div>
            <div className="sizeSelector">
            Talle:
            <select className="sizeselector" name="Talle">
                <option value="none" selected> -- </option>
                <option value="s"> S </option>
                <option value="m"> M </option>
                <option value="l"> L </option>
                <option value="xl"> XL </option>
            </select>
            </div>
            </div>
        <div className="contador">
            <button  className="buttonStyle" style= {{width:"3vw"}} onClick={AddOneProduct}>+</button>
            <input className="cardCounter" type="number" name="" value= {count} />
            <button className="buttonStyle" style= {{width:"3vw"}} onClick={RestOneProduct}>-</button>
        </div>
        <AddToCartButton stock={producto.stock} count= {count} />
        </div>
    </div>
    </>
)
}

export default ItemCounter;

