import React from "react";

const Loading = () =>{
    return(
        <>
                    <div  style={{marginLeft:"1vw"}}className="spinner-grow text-muted"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-primary"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-success"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-info"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-warning"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-danger"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-secondary"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-dark"></div>
                    <div  style={{marginLeft:"1vw"}} className="spinner-grow text-light"></div>
        </>
    )
    
}

export default Loading;