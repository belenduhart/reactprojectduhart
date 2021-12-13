//Formulario pago
import React from "react";

//Styles
import '../Cart.css';

//Components
import { useCartContext} from '../../CartContext/CartContext';


const Form = (props) => {
    const { colorSeleccionado } = useCartContext()
    const{ cartList }= useCartContext() 
    const { cartTotalAmount } = useCartContext()

    
    return(
        <main className="page payment-page">
        <section className="payment-form dark">
        <div className="container">
        <form 
        onChange={props.handleOnChange}
        onSubmit={props.handleOnSubmit}> 
            <div className="products">
            <h3 className="title">Checkout</h3>
            { 
            cartList.map(i =><>
            <div key={i.item.name} className="item">
            <span className="price">${(i.item.price)}</span>
            <p className="item-name">{(i.item.name)} { colorSeleccionado }</p>
            </div> 
            </>)}
            <div className="total">Total:<span className="price">${cartTotalAmount()}</span></div>
            </div>
            <div className="card-details">
            <h3 className="title">Detalles de Pago: Tarjeta de Crédito</h3>
            <div className="row">
            <div className="form-group col-sm-7">
                <label htmlFor="card-holder">Nombre Titular</label>
                <input name="name" value={props.formData.name} onChange={()=>props.verificarNombre()} id="card-holder" type="text" className="form-control" placeholder="Nombre y Apellido" required/>
            </div>
            <div className="form-group col-sm-5">
                <label htmlFor="month">Fecha de vencimiento</label>
                <div className="input-group expiration-date">
                <input name="month" onChange={()=> props.verificarVencimiento()} id="MM" type="text" className="form-control" placeholder="MM"  required/>
                <span className="date-separator"> / </span>
                <input name="year" onChange={()=> props.verificarVencimiento()} id="AA" type="text" className="form-control" placeholder="AA"  required/>
                <p className="error" style={{color:"red"}} >{props.mostrarError}</p>
                </div>
            </div>
            <div className="form-group col-sm-8">
                <label htmlFor="card-number">Numero tarjeta</label>
                <input name="card" id="card-number" type="text" className="form-control" placeholder="xxxx xxxx xxxx xxxx" required/>
            </div>
            <div className="form-group col-sm-4">
                <label htmlFor="cvc">CVC</label>
                <input name="cvc" maxLength="3" id="cvc" type="text" className="form-control" placeholder="CVC" required/>
            </div>
            <div className="form-group col-sm-7">
                <label htmlFor="email">E-mail titular</label>
                <input name="email" value={props.formData.email} onChange={()=> props.validarEmail()} id="email" type="text" className="form-control" placeholder="Email" required/>
            </div>
            <div className="form-group col-sm-7">
                <label htmlFor="phone">Celular</label>
                <input name="phone" value={props.formData.phone} onKeyDown={(evt)=> props.validarNumeros(evt)} 
                onChange={()=>props.celularCompleto()} id="celular" type="text" className="form-control" placeholder="xx xxxx xxxx" required/>
            </div>
            <div className="form-group col-sm-12">
                <button disabled={props.Unable} type="submit" id="finishPayment" 
                className="btn-primary btn-block">Finalizar Pago</button>
            </div>
            </div>
            </div>
        </form>
        </div>
        </section>
        </main>
    )
}

export default Form;