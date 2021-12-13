//Tarjeta de producto general
import React from "react";

//Components
import ItemDetail from "./ItemDetail/ItemDetail";

//Styles
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({product})=>{
        return(
            product.map(product=>
                <div key={product.name} className="card">
                    <div className="image">
                        <img className="image" alt={product.id} src={product.picture[0]}/>
                    </div>
                <div className="details">
                <div className="center">
                    <h1>{product.name}</h1>
                <ul>
                    <li> 
                        <ItemDetail product={product}/>
                    </li>
                </ul>
                </div>
                </div>
                </div>
                )
            )
    }

export default ItemDetailContainer; 
