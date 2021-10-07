//Components
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
// import ObtenerTarjetas from "./Mock/Mock";

//Utilities
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFireBase";


const ItemListContainer = ()=>{

const [ProductsArray, setProductos] = useState([]);
const [loading, setLoading] = useState(true);
const {idCategoria}=useParams();

useEffect(() => {
    
    //Funciones para firestore
    //Obtengo la coleccion
    if(idCategoria){
        const dbQuery = getFirestore();
        dbQuery.collection('productos').where('categoria', '==', idCategoria).get()
        .then(resp=> {
            setProductos(resp.docs.map(producto=> ({id:producto.id,...producto.data() })))
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }else{
        const dbQuery = getFirestore();
        dbQuery.collection('productos').get()
        .then(resp=> {
            setProductos(resp.docs.map(producto=> ({id:producto.id,...producto.data() })))
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }

    
}, [idCategoria])

console.log(ProductsArray)
    //Funciones sin usar Firestore
//     if (idCategoria){
//         ObtenerTarjetas
//         .then(respuesta => {
//         setProductos(respuesta.filter( product => product.categoria === idCategoria))})
//         .catch(error => console.log(error))
//         .finally(()=> setLoading(false))
//     } else {
//         ObtenerTarjetas
//         .then(respuesta =>{
//         setProductos(respuesta)})
//         .catch(error => console.log(error))
//         .finally(()=> setLoading(false))
//     }
// }, [idCategoria]);
// console.log(idCategoria);
// console.log(ProductsArray);

return(
    <>
    {loading ? 
        <div>
        <h4> Cargando Productos</h4>
        <div style={{marginLeft:"1vw"}}class="spinner-grow text-muted"></div>
        <div  style={{marginLeft:"1vw"}} class="spinner-grow text-primary"></div>
        <div  style={{marginLeft:"1vw"}} class="spinner-grow text-success"></div>
        <div  style={{marginLeft:"1vw"}} class="spinner-grow text-info"></div>
        <div  style={{marginLeft:"1vw"}} class="spinner-grow text-warning"></div>
        <div  style={{marginLeft:"1vw"}} class="spinner-grow text-danger"></div>
        <div  style={{marginLeft:"1vw"}} class="spinner-grow text-secondary"></div>
        <div  style={{marginLeft:"1vw"}} class="spinner-grow text-dark"></div>
        <div  style={{marginLeft:"1vw"}} class="spinner-grow text-light"></div>
        </div>
        : 
        <ItemDetailContainer product={ProductsArray}/>
    }
    </>
    )
}




export default ItemListContainer;