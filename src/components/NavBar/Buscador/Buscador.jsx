//Buscador
import React from "react";

//Components
import { FormControl, Button } from "react-bootstrap";
import { getFirestore } from "../../../services/getFireBase";
import 'firebase/firestore';

//Styles
import "./Buscador.css"

//Utilities
import { useState } from "react";


const Buscador =()=>{
const [Buscado, setBuscado] = useState([])
const [MostrarBusqueda, setMostrarBusqueda] = useState(false)
    //Buscador
    let ItemBuscar = [] ;
    let busqueda;

async function  Buscar ()  {
        console.log("hola")
        busqueda = document.querySelector(".Buscador").value;
        busqueda = busqueda.replace(/\b\w/g, l => l.toUpperCase())
        const db = getFirestore();
        let productRef = db.collection ('productos')
        let allproducts = await productRef.get();
        for (const doc of allproducts.docs){
            
            if ((doc.data().name.includes(busqueda)) === true)
                        { 
                            ItemBuscar.push({id:doc.id,...doc.data()})
                            console.log(ItemBuscar)
                            const dataArr = new Set(ItemBuscar)
                            let search = [...dataArr]
                            console.log(search)
                            setBuscado(search)
                            setMostrarBusqueda(true)
                            
                        }
        }
        
        }
    
    const borrarInput = () =>{
        document.querySelector(".Buscador").value = ""
    }
    const resetearBuscador = () =>{
        setBuscado([]) 
        borrarInput();
    }
    const cerrarBusqueda = () =>{
        setMostrarBusqueda(false)
    }


        return (    
            <>
                <FormControl
                    type="search"
                    placeholder="Buscar..."
                    className="Buscador"
                    aria-label="Search"
                    onClick={resetearBuscador}
                />
                <Button onClick={()=>Buscar()} id="BotonBuscar">Buscar</Button>
            {
            MostrarBusqueda ? ( <>
            <div id="popUpBuscado">
                    <div className="cerrarBusqueda" onClick={cerrarBusqueda}>X</div>
                    {Buscado.map(item => <><div className="card">
                        <div key={item.id} className="image">
                            <img className="image" alt={item.id} src={item.picture[0]}/>
                        </div>
                        <div className="details">
                            <div className="center">
                            <h1>{item.name}</h1>
                            <ul>
                            <li> 
                                <button className="buttonDetail" type="button" onClick={() => {setMostrarBusqueda(!false);}}>
                                   <a href={`/detalle/${item.id}`}>Ir al producto</a>
                                </button>
                            </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </> )
                    } </div> </>)
            : ""}
            </> 
        )
}



export default Buscador;
