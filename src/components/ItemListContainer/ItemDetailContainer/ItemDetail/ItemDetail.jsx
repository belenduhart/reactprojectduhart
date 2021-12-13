//Boton para ir al detalle del producto
import React from "react";

//Styles 
import "./ItemDetail.css"

//Utilities
import { useState } from "react";
import { Link } from "react-router-dom";



const ItemDetail = ({product})=>{
    const [show, setShow] = useState(true);

        return (
        <>
        <Link to={`/detalle/${product.id}`} >
            <button className="buttonDetail" type="button" onClick={() => {setShow(!show);}}>
                {show ? 'Mostrar Detalles' : 'Yendo al Producto'}
            </button>
            </Link>

        </>
    );
};

export default ItemDetail;
