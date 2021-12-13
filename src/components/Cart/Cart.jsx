// Carrito de compras
//Style
import "./Cart.css"

//Components
import { useCartContext } from "../CartContext/CartContext";
import EmptyCart from "./EmptyCart/EmptyCart";
import {FilledCart, TotalFilledCart} from "./FilledCart/FilledCart";

const Cart = () => {
    const{ cartList }= useCartContext() 

    return(
        <>
        {
            (cartList.length !== 0)? <div className="cartTitulo"><b>PRODUCTOS AGREGADOS AL CARRITO</b>
            </div>
            : ""
        }
        {
            (cartList.length === 0 )? 
            <EmptyCart/> :
            <FilledCart/>
}
        {
            (cartList.length !== 0)?
            <TotalFilledCart/>
            : ""
        }
        </>
    )
}




export default Cart;