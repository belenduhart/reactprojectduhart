//Icono carrito
//style
import './CarritoWidget.css';

//Utilities
import { Link } from 'react-router-dom';

//Components
import { useCartContext } from '../../CartContext/CartContext';


const CarritoWidget = ()=>{
    const {cartTotalCount} = useCartContext()
    return (
    <Link exact to="/cart" style={{textDecoration:"none"}}>
        <div className="carritoContainer">
            <i id="CarritoWidget" className="fas fa-shopping-bag"/>
            {((cartTotalCount()) !== 0) ? <label id="CarritoWidget">{cartTotalCount()}</label> : ""
            }
        </div>
    </Link>
    )
}

export default CarritoWidget;