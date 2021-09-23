import { useState } from "react";
import "./ItemDetail.css"
import { Link } from "react-router-dom";



const ItemDetail = ({product})=>{
    const [show, setShow] = useState(true);

        return (
        <>
        <Link to={`/detalle/${product.id}`} >
            <button className="buttonStyle" type="button" onClick={() => {setShow(!show);}}>
                {show ? 'Mostrar Detalles' : 'Yendo al Producto'}
            </button>
            </Link>

        </>
    );
};

export default ItemDetail;

// const ItemDetail = (props)=>{
//     const [show, setShow] = useState(true);
// <Item producto={props.id}/>
//         return (
//         <>
//             <button className="buttonStyle" type="button" onClick={() => {setShow(!show);}}>
//                 {show ? 'Mostrar Detalles' : 'Ocultar Detalles'}
//             </button>
            
//                 {show ? (
//             <div>
//             </div>
//             ) : (
//             <div>
//                 <p className="detalles">Precio: ${props.price}.-</p>
//                 <p className="detalles">Stock disponible: {props.stock} unidades</p>
//             <Link to={`/detalle/${props.id}`} >
//                 <button id="buyButton" className="buttonStyle" type="button">¡Comprar!</button>
//             </Link>
//             </div>
//             )}
//         </>
//     );
// };