import ItemDetail from "./ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({product})=>{
        return(
            product.map(product=> <div className="cardStyle">
            <img className="cardImage" src={product.picture} alt={product.name} />
            <p className="tituloProducto" key={product.id}> {product.name} </p>
            <ItemDetail product={product}/>
            <div className="ProductDetailsDiv"> </div>
            </div>)
        )
    }

export default ItemDetailContainer;