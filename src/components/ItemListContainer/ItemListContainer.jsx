//Components
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Loading from "../Loading/Loading";

//Utilities
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFireBase";


const ItemListContainer = ()=>{

const [ProductsArray, setProductos] = useState([]);
const [loading, setLoading] = useState(true);
const {idCategoria}=useParams();

useEffect(() => {
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

return(
    <>
    {loading ? 
        <div>
        <h4 style={{textAlign:"center"}}> Cargando Productos</h4>
        <Loading/>  
        </div>
        : 
        <ItemDetailContainer product={ProductsArray}/>
    }
    </>
    )
}




export default ItemListContainer;