// Carrito de compras
//Style
import "./Cart.css"

//Utilities
import { Link } from "react-router-dom";

//Components
import { useCartContext } from "../CartContext/CartContext";

const Cart = () => {
    const{ cartList }= useCartContext() 
    const { removeItem } = useCartContext()
    const { cartTotalAmount } = useCartContext()
    const {emptyCart} = useCartContext()
    console.log(cartList)
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
            <button className="buttonStyle" style={{width:"20vw", margin:"1vh 40%"}}> ¡Comenzar a comprar! </button>
            </Link>
            </> :
            (cartList.map(i => <>
            <div className="CartProduct"> 
                <img src={i.item.picture} alt="{i.item.name}" />
                <p> {i.item.name}</p>
                <p>Cantidad: {i.count}</p>
                <p> Subtotal: $ {(i.item.price)*(i.count)} </p>
                <div  onClick= {()=> removeItem (i.item.id)}><i class="fas fa-trash-alt"  ></i></div>
            </div>
            </>)
            )}
        {
            (cartList.length !== 0)? <> 
            <div className="containerTotal">
            <div className="totalAmount">Total: ${cartTotalAmount()} </div> 
            <div className="botonesFinalesDiv">
                <button className="vaciarButton" onClick={() => emptyCart()}>Vaciar Carrito</button>
                <button className="pagarButton">Pagar</button>
            </div>
            </div>
            </>: ""
        }
        </>
    )
}

export default Cart;