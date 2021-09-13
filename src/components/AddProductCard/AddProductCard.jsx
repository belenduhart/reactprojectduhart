
  import {useState} from 'react';
  import './AddProductCard.css';

const AddProductCard = () => {
    let stock = 10;
    const [count, setCount] = useState(0)
    function AddOneProduct (){
    if (count <= (stock - 1)){
      setCount(count + 1);
    }else {
      alert ("Lo siento, ¡No contamos con más stock!")
    }
      
    }
    function RestOneProduct (){
      if (count === 0){
        return false;
      }else {
        setCount(count - 1)
      }
     
    }
  function AgregarAlCarrito() {
    stock = (stock - count)
    console.log( "el stock disponible es de: " + stock)
    alert ("¡Gracias! ¡Agregamos tu producto al carrito!")
  }

    return (
      <div className="cardStyle">
        <img className="cardImage" src="https://i.ibb.co/hW7nsHs/3b.jpg" alt="Remera rosa gato malo" />
        <p className="tituloProducto">Remera Gato Malo</p>
        <div>
        <button  className="buttonStyle" style= {{width:"3vw"}} onClick={AddOneProduct}>+</button>
        <input className="cardCounter" type="number" name="" value= {count} />
        <button className="buttonStyle" style= {{width:"3vw"}} onClick={RestOneProduct}>-</button>
        </div>
        <button className="buttonStyle" style= {{width:"13vw", margin:"1vh 1vw"}} onClick = {AgregarAlCarrito} >¡Agregar al Carrito!</button>
      </div>
    )
  }


export default AddProductCard;