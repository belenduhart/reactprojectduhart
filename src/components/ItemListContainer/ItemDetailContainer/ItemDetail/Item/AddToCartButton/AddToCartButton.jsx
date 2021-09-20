import { useState } from "react";

const AddToCartButton = ()=>{
    const [inputType, setInputType] = useState('button')
    const AddButton = ()=>{
        return (
            <>
            <button className="buttonStyle" style= {{width:"13vw", margin:"1vh 1vw"}} onClick = {Intercambiar} >¡Agregar al Carrito!</button>
            </>
        )
    }
    const SuccessButton = ()=>{
        return (
            <button className="btn btn-success" style= {{width:"13vw", margin:"1vh 1vw"}} onClick = {Intercambiar} >¡Producto Agregado!<br/>  Ir al carrito</button>
        )
    }

    const Intercambiar = ()=>{
        setInputType('input')
    }
    
    return(
        <>
        {inputType === 'button' ?
        <AddButton/> : <SuccessButton/> 
        }
        </>
    )
}

export default AddToCartButton;