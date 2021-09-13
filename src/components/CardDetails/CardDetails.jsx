import { useState } from "react";
import "./CardDetails.css";
import DetailsButton from "../DetailsButton/DetailsButton";
import { useEffect } from "react";

const ObtenerTarjetas = new Promise ((res,rej)=>{
    let respuesta = "obtener";
    if (respuesta === "obtener"){
        setTimeout(()=>{
            res(ProductsArray)
        }, 3000)
    }else {
        rej("No se encuentran los productos")
    }
})

const CardDetails = ()=>{
const [ProductsArray, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
ObtenerTarjetas
.then(respuesta =>{
    setProductos(respuesta)
})
.catch(error => console.log(error))
// console.log(ProductsArray)
.finally(()=> setLoading(false))

}, [])
return(
    <>
    {loading ? <h4> Cargando Productos...</h4> : ProductsArray.map(product => <div className="cardStyle">
    <img className="cardImage"src={product.picture} alt={product.name} />
    <p className="tituloProducto" key={product.id}> {product.name} </p>
    <DetailsButton price={product.price} id={product.id} stock={product.stock} />
    <div className="ProductDetailsDiv"> 
    </div>
    </div>)}
    </>
    )
}

//Array Productos
const ProductsArray = [
    { id:"a0" , name: "Remera Gato Malo Rosa" , price:"350" , stock:"15", picture:"https://i.ibb.co/PtdDW20/gatob.jpg"},
    { id: "a1" , name: "Remera Gato Malo Blanca" , price:"350" , stock:"15", picture:"https://i.ibb.co/0s2b2ff/gatod.jpg"},
    { id: "a2" , name: "Remera Gato Malo Negra" , price:"350" , stock:"15", picture:"https://i.ibb.co/6BQ770w/gatoa.jpg"},
    { id: "a3" , name: "Remera Gato Malo Celeste" , price:"350" , stock:"15", picture:"https://i.ibb.co/Ld598BW/gatoc.jpg"},
    { id: "a4" , name: "Remera Gato Malo Roja" , price:"350" , stock:"15", picture:"https://i.ibb.co/vP5HSss/gatof.jpg"},
    { id: "a5" , name: "Remera Gato Malo Verde" , price:"350" , stock:"15", picture:"https://i.ibb.co/jVZLx5r/gatoe.jpg"},
    { id: "b0" , name: "Remera Mujer Anonima Verde" , price:"400" , stock:"20", picture:"https://i.ibb.co/gwjbSYL/mujerb.jpg"},
    { id: "b1" , name: "Remera Mujer Anonima Blanca" , price:"400" , stock:"20", picture:"https://i.ibb.co/QHhbgXh/mujera.jpg"},
    { id: "b2" , name: "Remera Mujer Anonima Azul" , price:"400" , stock:"20", picture:"https://i.ibb.co/Xt7tG3k/mujerc.jpg"},
]

export default CardDetails;