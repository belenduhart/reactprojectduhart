import { useState } from "react";
import "./AddCartButton.css";
import {Link} from "react-router-dom";


const AddToCartButton = ({stock, count, onAdd})=>{

    const [inputType, setInputType] = useState('button')

    const AddButton = ()=>{
        return (
            <>
            <div className="buttonContainer">
                <div className="btn" onClick = {Intercambiar}>
                    <span className="flip-front">¡Agregar al carrito!</span>
                    <span className="flip-back">¡Agregame!</span>
                </div>
            </div>
            </>
        )
    }

    

    const SuccessButton = ({stock, count})=>{
        console.log("stock disponible: " + (stock-count))
        return (
            <>
            <div>¡Agregamos {count} productos al carrito!</div>
            <div className="containerBotonesSuccess">
            <Link exact to="/cart">
            <div className="buttonContainer" >
                <div className="btn2">
                    <span className="flip-front2">¡Terminar compra!</span>
                    <span className="flip-back2">¡Vamos al carrito!</span>
                </div>
            </div>
            </Link>
            <Link exact to="/categoria">
            <div className="buttonContainer">
                <div className="btn2">
                    <span className="flip-front2">¡Seguir comprando!</span>
                    <span className="flip-back2">¡Sigamos!</span>
                </div>
            </div>
            </Link>
            </div>
            </>
        )}

        const Intercambiar = ()=>{
            setInputType('input')
            AgregarAlCarrito()
        }
        
        const AgregarAlCarrito = () => {
            onAdd(count)
        }

    return(
        <>
        {(inputType === 'button') ?
        <AddButton/> : <SuccessButton stock={stock} count={count}/> 
        }
        </>
    )
}

export default AddToCartButton;