import './CarritoWidget.css';
import { Link } from 'react-router-dom';

const CarritoWidget = ()=>{
    return (
    <Link exact to="/cart">
    <img className="CarritoWidget" 
    src='https://i.ibb.co/7pyD7tS/edit-1105049-960-720.png' alt="carrito compras" />
    </Link>
    )
}

export default CarritoWidget;