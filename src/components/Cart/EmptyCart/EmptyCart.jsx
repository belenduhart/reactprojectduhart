//Carrito Vacio
import React from "react";

//Utilities
import { Link } from "react-router-dom";

//Styles
import "../Cart.css"

const EmptyCart = () => {
    return(
        <>
            <div className="emptyContainer">
            <h1 className="emptyCart"> ¡Ups! <br/> parece que no agregaste nada al carrito todavía</h1>
            <Link exact to="/categoria">
            <button className="buttonStyle3"> ¡Comenzar a comprar! </button>
            </Link>  
            </div>

            </> 
    )
}
export default EmptyCart;