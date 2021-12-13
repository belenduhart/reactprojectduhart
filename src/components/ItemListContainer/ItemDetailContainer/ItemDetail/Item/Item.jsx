//Detalle especifico de cada producto
import React from "react";

//Styles
import "./Item.css";

//Components
import ItemCounter from "./ItemCounter/ItemCounter";
import Loading from "../../../../Loading/Loading";

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

    return (
        <>
        {loading ?
                <div sytle={{height:"100vh"}}>
                <Loading/>
                </div>
        : 
        <div className="cardStyle2">
        <div className="counterCointainer">
        <div id="carouselExampleControls" className="carousel slide carouitem"  data-bs-pause="hover" data-bs-interval="false">
                <div id= "carouselProductos" className="carousel-inner">
                    {productoComprar.picture.map((pic,pos)=> <div  
                    className={pos === 0 ? "carousel-item active" : "carousel-item"} data-bs-ride="" key={pos}>
                <img src={pic} id="cardImage2" className="d-block" alt={pic} />
                </div>)}
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
            <div className="selectores">
            <div className="sizeSelector"> 
            Color :
            <select className="colorselector" id="colorselector" name="Colores" selected>
                {productoComprar.colores.map(el=> <option className="opciones" value={el}>{el}</option>)}
            </select>
            </div>
            <div className="sizeSelector">
            Talle:
            <select className="sizeselector" name="Talle">
                <option value="s" selected> S </option>
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
