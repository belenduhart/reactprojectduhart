import ItemDetail from "./ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({product})=>{
        return(
            product.map(product=>
                <div className="card">
                    <div className="image">
                        <img className="image" src={product.picture[0]}/>
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
