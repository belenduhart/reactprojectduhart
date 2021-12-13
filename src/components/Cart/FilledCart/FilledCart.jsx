//Carrito con productos
import React from "react";

//Styles
import "../Cart.css"

//Components
import { useCartContext } from "../../CartContext/CartContext";
import PaymentForm from "../Payment/PaymentForm";

const FilledCart = () => {
    const{ cartList }= useCartContext() 
    const { removeItem } = useCartContext()
    const { colorSeleccionado } = useCartContext()


    return(
        (cartList.map(i => <>
            <div key={i.item.name} className="CartProduct"> 
                <img src={i.item.picture} alt="{i.item.name}" />
                <p> {i.item.name} {colorSeleccionado}</p>
                <p>Cantidad: {i.count}</p>
                <p> Subtotal: $ {(i.item.price)*(i.count)} </p>
                <div onClick= {()=> removeItem (i.item.id)}><i className="fas fa-trash-alt"></i></div>
            </div>
            </>)
            )
    )
}

const TotalFilledCart = () => {
    const { cartTotalAmount } = useCartContext()
    const {emptyCart} = useCartContext()
    return(
            <> 
            <div className="containerTotal">
            <div className="totalAmount">Total: ${cartTotalAmount()} </div> 
            <div className="botonesFinalesDiv">
                <button className="vaciarButton" onClick={() => emptyCart()}>Vaciar Carrito</button>
                <PaymentForm/>
            </div>
            </div>
            </>
    )
}
export {FilledCart, TotalFilledCart};