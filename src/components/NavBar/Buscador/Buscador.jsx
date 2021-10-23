import { FormControl, Button } from "react-bootstrap";
import "./Buscador.css"
import { Link } from "react-router-dom";
import { useState } from "react";


const Buscador =()=>{
    const [Buscar, setBuscar]= useState("/categoria/")
    let busqueda;

const  mostrarBusqueda = () => {
    busqueda = document.querySelector(".Buscador").value;
    if (busqueda === "" || busqueda === null) {
		setBuscar("/categoria/"); //mostrar todos los productos
        busqueda = ""
        console.log(Buscar)
	} else {
        busqueda = busqueda.replace(/\b\w/g, l => l.toUpperCase())
        if (busqueda !== "Pantalones" &&
            busqueda !== "Polleras" &&  
            busqueda !== "Remeras" &&
            busqueda !== "Buzos" &&
            busqueda !== "Blusas" ){
                setBuscar("/categoria/")
            }else{
                setBuscar('/categoria/' + (busqueda))   
            }
        console.log(Buscar)
    }
}

const borrarInput = () =>{
    document.querySelector(".Buscador").value = ""
}

    return (
        <>
            <FormControl
                        type="search"
                        placeholder="Buscar..."
                        className="Buscador"
                        aria-label="Search"
                        onChange={mostrarBusqueda}
                    />
                    <Link exact to={Buscar}>
                    <Button onClick={borrarInput}id="BotonBuscar">Buscar</Button>
                    </Link>
        </> 
    )
}

export default Buscador;
