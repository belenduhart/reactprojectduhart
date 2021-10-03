//Styles
import "./Item.css";

//Components
import ItemCounter from "./ItemCounter/ItemCounter";
// import ObtenerTarjetas from "../../../Mock/Mock";

//Utilities
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getFirestore } from "../../../../../services/getFireBase";

const Item = ()=>{
  
    const [productoComprar, setProductoComprar] = useState({});
    const {id}=useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dbQuery = getFirestore();
        dbQuery.collection('productos').doc(id).get()
        .then(resp=> {
            console.log(resp)
            setProductoComprar({id:resp.id,...resp.data() })
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
        
    }, [id]);

    //Sin firebase
        // if (id){
        //     ObtenerTarjetas
        //     .then( respuesta => {
        //             setProductoComprar(respuesta.find( producto => producto.id === id))
        //         })
        //     .catch(error => console.log(error))
        //     .finally(()=> setLoading(false))
        //     }
        // }, [id]);
        // console.log(id);
        // console.log(productoComprar)

    return (
        <>
        {loading ? <h4> Cargando Producto...</h4> : 
        <div className="cardStyle2">
        <div className="counterCointainer">
        <img className="cardImage2" src={productoComprar.picture} alt={productoComprar.name} />
        <p className="tituloProducto">{productoComprar.name}</p>
        <p className="detalles">Precio: ${productoComprar.price}.-</p>
        <p className="detalles">Stock disponible: {productoComprar.stock} unidades</p>
        </div>
        <div className="counterCointainer">
            {/* Seleccion de colores a desarrollar proximamente */}
            <div className="selectores">
            <div className="sizeSelector"> 
            Color :
            <select className="colorselector" name="Colores">
                <option value="ejemplo"> Ejemplo </option>
            {/* <ColorSelector/> */}
            </select>
            </div>
            <div className="sizeSelector">
            Talle:
            <select className="sizeselector" name="Talle">
                <option value="none" selected> -- </option>
                <option value="s"> S </option>
                <option value="m"> M </option>
                <option value="l"> L </option>
                <option value="xl"> XL </option>
            </select>
            </div>
            </div>
        <ItemCounter producto ={productoComprar}/>
        </div>
        </div>
        }
        </>
    )}





export default Item;

// const Item = ({producto})=>{
//     const [productoComprar, setProductoComprar] = useState({});
//     const {id}=useParams();
    
//     useEffect(() => {
//         if (id){
//             ObtenerTarjetas
//             .then( respuesta => {
//                     setProductoComprar(respuesta.find( producto => producto.id === id))
//                 })
//             .catch(error => console.log(error))
//             }
//         }, [id]);
//         console.log(id);
//         console.log(productoComprar)
        


//     return (
//         <>
//         <Counter producto ={productoComprar}/>
//         </>
//     )

// }