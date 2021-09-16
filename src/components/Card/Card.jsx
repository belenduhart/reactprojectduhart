import DetailsButton from "../DetailsButton/DetailsButton";

const Card = ({product}) =>{
    return(
        product.map(product=><div className="cardStyle">
        <img className="cardImage" src={product.picture} alt={product.name} />
        <p className="tituloProducto" key={product.id}> {product.name} </p>
        <DetailsButton price={product.price} id={product.id} stock={product.stock} picture={product.picture} />
        <div className="ProductDetailsDiv"> </div>
        </div>)
    )
}

export default Card;