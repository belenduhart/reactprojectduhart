import { useState } from "react";
import "./CardDetails.css";
import { useEffect } from "react";
import ObtenerTarjetas from "../Mock/Mock";
import { useParams } from "react-router";
import Card from "../Card/Card";


const CardDetails = ()=>{
const [ProductsArray, setProductos] = useState([]);
const [loading, setLoading] = useState(true);
const {idCategoria}=useParams();

useEffect(() => {
    if (idCategoria){
        ObtenerTarjetas
        .then(respuesta => {
        setProductos(respuesta.filter( product => product.categoria === idCategoria))})
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    } else {
        ObtenerTarjetas
        .then(respuesta =>{
        setProductos(respuesta)})
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }
}, [idCategoria]);
console.log(idCategoria);
console.log(ProductsArray);

return(
    <>
    {loading ? <h4> Cargando Productos...</h4> : 
        <Card product={ProductsArray}/>
    }
    </>
    )
}




export default CardDetails;