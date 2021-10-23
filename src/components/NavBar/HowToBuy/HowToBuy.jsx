import "./HowToBuy.css";

const HowToBuy = () =>{
    return (
        <>
        <div className="htbdiv">
            <h1 className="BuyTittle"><b>CÓMO COMPRAR EN LAS CHUECAS?</b></h1>
            <p><i> Comienza armando tu pedido:</i></p>
            <ul>
                <li>Elegi los productos que deseas comprar, por talle y por color</li>
                <li>Hace click en el botón 'Agregar al carrito'</li>
                <li> Si querés seguir agregando más prodcutos, hace click en 'Seguir Comprando'</li>
                <li>Si querés finalizar tu compra hace click en 'Terminar Compra'</li>
                <li>Revisa todos los detalles de tu compra en el Checkout</li>
                <li>Luego completa con los datos de tu tarjeta y hace click en 'Pagar'</li>
                <li>Una vez que completes todos los pasos anteriores, vas a recibir un nro de Orden y nos vamos a
                    contactar por Whatsapp una vez confirmado el pago.
                </li>
            </ul>
            <h1 className="BuyTittle"> ¡Gracias por confiar en nosotros! </h1>
            <h1 className="Firma"><b> Las Chuecas <i class="far fa-heart"></i></b></h1>
        </div>
        </>
    )
}

export default HowToBuy;



