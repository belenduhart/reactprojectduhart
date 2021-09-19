import Counter from "./Counter/Counter";
import "./Item.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ObtenerTarjetas from "../../../Mock/Mock";

const Item = ({producto})=>{
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
        <Counter producto ={productoComprar}/>
        </>
    )

}



export default Item;