//Producto fuera de stock
import React from "react";

//Utilities
import { Link } from "react-router-dom";

//Styles
import '../ItemCounter.css';

const OutStock = () =>{
    return(
        <div className="Modal">
                <div style={{zIndex:333}} className="ModalContainer">
                <Link exact to="/categoria">
                            <span>VOLVER</span> 
                            </Link>
                                <h2 style={{width:"80%", textAlign:"center"}}>Parece que no tenemos stock del producto que solicitaste</h2>
                                <p>Pero no te preocupes...</p>
                                <p>¡Tenemos mucha más ropa para completar tu look!</p>
                                <p>Haciendo click en volver podrás ver todos los productos que tenemos para vos</p>
                            <h1 className="Firma"><b> Las Chuecas <i className="far fa-heart"></i></b></h1>
                </div>
            </div>
    )
}

export default OutStock;