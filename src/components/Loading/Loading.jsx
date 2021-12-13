//Loading
import React from "react";

//Styles
import './Loading.css'

const Loading = () =>{
    return(
        <>
                    <div className="loadingContainer">
                    <div>Cargando Productos</div>
                    <div  style={{marginLeft:"1vw"}}className="spinner-grow text-muted"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-primary"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-success"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-info"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-warning"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-danger"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-secondary"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-dark"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-light"></div>
                    </div>
        </>
    )
    
}

export default Loading;