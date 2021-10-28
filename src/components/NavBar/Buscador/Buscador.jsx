import { FormControl, Button } from "react-bootstrap";
import "./Buscador.css"
import { Link } from "react-router-dom";
import { getFirestore } from "../../../services/getFireBase";
import 'firebase/firestore';
import { useState } from "react";


const Buscador =()=>{
    //TODO COMPLETAR BUSQUEDA
const [Buscado, setBuscado] = useState([])
const [MostrarBusqueda, setMostrarBusqueda] = useState(false)
    //Buscador
    let ItemBuscar = [] ;
    let busqueda;





    function  Buscar ()  {
        busqueda = document.querySelector(".Buscador").value;
        busqueda = busqueda.replace(/\b\w/g, l => l.toUpperCase())
        console.log(busqueda)
        const db = getFirestore();
        db.collection('productos')
        .get()
        .then(querySnapshot => 
            {
                querySnapshot.forEach(doc => {
                        if ((doc.data().name.includes(busqueda)) === true)
                        { 
                            ItemBuscar.push(doc.data())
                            console.log(ItemBuscar)
                            setBuscado(ItemBuscar)
                            // console.log(Buscado)
                        }
                })
            })
        .catch(error=>console.log(error))
        .finally(console.log(Buscado))    
        }
        // console.log(Buscado)
    const mostrarDiv = () =>{
        setMostrarBusqueda(true)
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


    const [show, setShow] = useState(true);
        return (    
            <>
                <FormControl
                    type="search"
                    placeholder="Buscar..."
                    className="Buscador"
                    aria-label="Search"
                    onClick={resetearBuscador}
                    onBlur = {Buscar}
                />
                <Button onClick={mostrarDiv}id="BotonBuscar">Buscar</Button>
            {
            MostrarBusqueda ? ( <>
            <div id="popUpBuscado">
                    <div className="cerrarBusqueda" onClick={cerrarBusqueda}>X</div>
                    {ItemBuscar.map(item => <><div class="card">
                        <div class="image">
                            <img class="image" src={item.picture[0]}/>
                        </div>
                        <div class="details">
                            <div class="center">
                            <h1>{item.name}</h1>
                            <ul>
                            <li> 
                            <Link to={`/detalle/`} >
                                <button className="buttonDetail" type="button" onClick={() => {setShow(!show);}}>
                                    {show ? 'Mostrar Detalles' : 'Yendo al Producto'}
                                </button>
                                </Link>
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
