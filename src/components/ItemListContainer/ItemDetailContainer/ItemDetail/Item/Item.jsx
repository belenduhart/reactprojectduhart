import ItemCounter from "./ItemCounter/ItemCounter";
import "./Item.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ObtenerTarjetas from "../../../Mock/Mock";

const Item = ({producto})=>{
    // const  OnAdd = (count)=>{
    //     return(
    //         <>
    //         <div>¡Agregamos {count} productos al carrito!</div>
    //         </>
    //     )
    // }
    const [productoComprar, setProductoComprar] = useState({});
    const {id}=useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id){
            ObtenerTarjetas
            .then( respuesta => {
                    setProductoComprar(respuesta.find( producto => producto.id === id))
                })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
            }
        }, [id]);
        console.log(id);
        console.log(productoComprar)

    return (
        <>
        {loading ? <h4> Cargando Producto...</h4> :
        <ItemCounter producto ={productoComprar}/>}
        </>
    )

}



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