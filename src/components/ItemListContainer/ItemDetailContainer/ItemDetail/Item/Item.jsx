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
        <div className="cardStyle2">
        <div className="counterCointainer">
        {/* <img className="cardImage2" src={productoComprar.picture} alt={productoComprar.name} /> */}
        <div id="carouselExampleControls" className="carousel slide carouitem"  data-bs-pause="hover" data-bs-interval="false">
                <div id= "carouselProductos" className="carousel-inner">
                <div  className="carousel-item active" data-bs-ride="">
                <img src={productoComprar.picture[0]} id="cardImage2" className="d-block" alt={productoComprar.name} />
                </div>
                <div className="carousel-item">
                <img src={productoComprar.picture[1]} id="cardImage2" className="d-block" alt={productoComprar.name} />
                </div>
                <div className="carousel-item">
                <img src={productoComprar.picture[2]} id="cardImage2" className="d-block" alt={productoComprar.name} />
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"  id="iconPrevNext" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next"  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" id="iconPrevNext" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
        </div>
        <p className="tituloProducto">{productoComprar.name}</p>
        </div>
        <div className="counterCointainer">
       
            {/* Seleccion de colores a desarrollar proximamente */}
            <div className="selectores">
            <div className="sizeSelector"> 
            Color :
            <select className="colorselector" id="colorselector" name="Colores" selected>
                <option className="opciones" value={productoComprar.colores[0]}> {productoComprar.colores[0]} </option>
                <option className="opciones" value={productoComprar.colores[1]}> {productoComprar.colores[1]} </option>
                <option className="opciones" value={productoComprar.colores[2]}> {productoComprar.colores[2]} </option>
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
            <p style={{fontSize:"2em"}}className="detalles">${productoComprar.price}.-</p>
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