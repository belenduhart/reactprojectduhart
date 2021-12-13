import React from "react";
import "../Cart.css"
import { useCartContext } from "../../CartContext/CartContext";
import PaymentForm from "../Payment/PaymentForm";

const FilledCart = () => {
    const{ cartList }= useCartContext() 
    const { removeItem } = useCartContext()
    const { colorSeleccionado } = useCartContext()


    return(
        (cartList.map(i => <>
            <div className="CartProduct"> 
                <img src={i.item.picture} alt="{i.item.name}" />
                <p> {i.item.name} {colorSeleccionado}</p>
                <p>Cantidad: {i.count}</p>
                <p> Subtotal: $ {(i.item.price)*(i.count)} </p>
                <div onClick= {()=> removeItem (i.item.id)}><i class="fas fa-trash-alt"></i></div>
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