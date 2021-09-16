import React, { useState } from 'react';
import "./DetailsButton.css"

const DetailsButton = (props) => {
    const [show, setShow] = useState(true);
    return (
      <>
        <button className="buttonStyle" type="button" onClick={() => {setShow(!show);}}>
        {show ? 'Mostrar Detalles' : 'Ocultar Detalles'}
        </button>
      {show ? (
        <div>
        </div>
        ) : (
          <div>
          <p className="detalles">Precio: ${props.price}.-</p>
          <p className="detalles">Stock disponible: {props.stock} unidades</p>
          <p className="detalles" >Id. producto: {props.id}.-</p>
          {/* Poner link */}
          <button id="buyButton" className="buttonStyle" type="button">¡Comprar!</button>
          </div>
        )}
      </>
    );
  };
  
  
  export default DetailsButton;