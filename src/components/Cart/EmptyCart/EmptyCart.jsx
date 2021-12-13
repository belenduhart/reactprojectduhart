import React from "react";
import { Link } from "react-router-dom";
import "../Cart.css"

const EmptyCart = () => {
    return(
        <>
            <h1 className="emptyCart"> ¡Ups! <br/> parece que no agregaste nada al carrito todavía</h1>
            <Link exact to="/categoria">
            <button className="buttonStyle3"> ¡Comenzar a comprar! </button>
            </Link>
            </> 
    )
}
export default EmptyCart;