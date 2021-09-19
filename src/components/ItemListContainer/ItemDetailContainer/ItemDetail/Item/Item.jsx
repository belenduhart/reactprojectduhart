import Counter from "./Counter/Counter";
import "./Item.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ObtenerTarjetas from "../../../Mock/Mock";

const Item = ({producto})=>{
    // const ObtenerId = new Promise ((res,rej)=>{
    //     let respuesta2 = "obtener";
    //     if (respuesta2 === "obtener"){
    //         setTimeout(()=>{
    //             res({producto})
    //         }, 1000)
    //     }else {
    //         rej("No se encuentran el producto")
    //     }
    // })
    const [productoComprar, setProductoComprar] = useState({});
    const {id}=useParams();
    
    useEffect(() => {
        if (id){
            ObtenerTarjetas
            .then( respuesta => {
                    setProductoComprar(respuesta.find( producto => producto.id === id))
                })
            .catch(error => console.log(error))
            }
        }, [id]);
        console.log(id);
        console.log(productoComprar)
        


    return (
        <>
        {/* <div className="cardStyle">
            <img className="cardImage" src={producto.picture} alt={producto.name} />
            <p className="tituloProducto">{producto.name}</p> */}
        <Counter producto ={productoComprar}/>
        {/* <button className="buttonStyle" style= {{width:"13vw", margin:"1vh 1vw"}} onClick = {AgregarAlCarrito} >¡Agregar al Carrito!</button>
        </div> */}
        </>
    )

}



export default Item;