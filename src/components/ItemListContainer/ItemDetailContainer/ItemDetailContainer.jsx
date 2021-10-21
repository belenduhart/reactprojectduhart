import ItemDetail from "./ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({product})=>{
        return(
            product.map(product=>
                <div class="card">
                    <div class="image">
                        <img class="image" src={product.picture[0]}/>
                    </div>
                <div class="details">
                <div class="center">
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
