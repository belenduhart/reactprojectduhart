import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ObtenerTarjetas from "./Mock/Mock";


const ItemListContainer = ()=>{

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
        <ItemDetailContainer product={ProductsArray}/>
    }
    </>
    )
}




export default ItemListContainer;