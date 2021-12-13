//Popup pago satisfactorio
import React from "react";

const PaymentSuccess = (props) =>{

    return(
        <div className="ModalContainer">
        <span onClick={props.finalizar} >X</span> 
        <h2>¡Gracias por confiar en nosotros {props.name}!</h2>
        <p>Tu nro. de orden:<b><i> {props.ordenId}.</i></b></p> 
        <p>Nos contactaremos a la brevedad vía Whatsapp para coordinar la entrega</p>
        <p>Si tenes alguna consulta con respecto al pedido, ¡no dudes en escribirnos!</p>
        <h3>Gracias por elegirnos...</h3>
        <h1 className="Firma"><b> Las Chuecas <i className="far fa-heart"></i></b></h1>
</div>
    )

}

export default PaymentSuccess;