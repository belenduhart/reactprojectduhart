// Carrito de compras
//Style
import "./Cart.css"

//Utilities
import { Link } from "react-router-dom";

//Components
import { useCartContext } from "../CartContext/CartContext";
import PaymentForm from "./PaymentForm";

const Cart = () => {
    const{ cartList }= useCartContext() 
    const { removeItem } = useCartContext()
    const { colorSeleccionado } = useCartContext()
    const { cartTotalAmount } = useCartContext()
    const {emptyCart} = useCartContext()

    return(
        <>
        {
            (cartList.length !== 0)? <div className="cartTitulo"><b>PRODUCTOS AGREGADOS AL CARRITO</b>
            </div>
            : ""
        }
        {
            (cartList.length === 0 )? <>
            <h1 className="emptyCart"> ¡Ups! <br/> parece que no agregaste nada al carrito todavía</h1>
            <Link exact to="/categoria">
            <button className="buttonStyle3"> ¡Comenzar a comprar! </button>
            </Link>
            </> :
            (cartList.map(i => <>
            <div className="CartProduct"> 
                <img src={i.item.picture} alt="{i.item.name}" />
                <p> {i.item.name} {colorSeleccionado}</p>
                {
                    (i.count > i.item.stock) ? 
                    (<><p>Contamos solo con: {i.item.stock}</p>
                    <p> Subtotal: $ {(i.item.price)*(i.item.stock)} </p></>)
                    : 
                    (<><p>Cantidad: {i.count}</p>
                    <p> Subtotal: $ {(i.item.price)*(i.count)} </p>
                    </>
                    )
                }
                <div onClick= {()=> removeItem (i.item.id)}><i class="fas fa-trash-alt"  ></i></div>
            </div>
            </>)
            )}
        {
            (cartList.length !== 0)? <> 
            <div className="containerTotal">
            <div className="totalAmount">Total: ${cartTotalAmount()} </div> 
            <div className="botonesFinalesDiv">
                <button className="vaciarButton" onClick={() => emptyCart()}>Vaciar Carrito</button>
                <PaymentForm/>
            </div>
            </div>
            </>: ""
        }
        </>
    )
}




export default Cart;