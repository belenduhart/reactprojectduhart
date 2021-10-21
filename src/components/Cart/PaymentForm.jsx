//Styles
import './Cart.css'
//Components
import { useCartContext } from "../CartContext/CartContext";

//Utilities
import { useState } from "react";
import { getFirestore } from "../../services/getFireBase";
import firebase from 'firebase';
import 'firebase/firestore';
import { Link } from 'react-router-dom';


const PaymentForm = () =>{
    const { colorSeleccionado } = useCartContext()
    const{ cartList }= useCartContext() 
    const { cartTotalAmount } = useCartContext()
    const {emptyCart} = useCartContext()
    //Mostrar form
    const [enable, setEnable] = useState(true);
    //verificacion form
    const [ habilitar, setHabilitar] = useState([]);
    console.log(habilitar)
    const [success, setSuccess] = useState(false)
    const [ordenId, setOrdenId] = useState()

const [formData, setFormData]= useState({
    name: '',
    email:'',
    phone:''
})

const handleOnChange = (e)=> {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
console.log(formData)

    // const orderSuccess = () => {
    // }
    //Funcion se activa al onClick de un type submit
const handleOnSubmit = (e) => {
    e.preventDefault();
    const order = {
            date : firebase.firestore.Timestamp.fromDate(new Date()),
            buyer : formData,
            total: cartTotalAmount(),
            items : cartList.map(i =>{
                const id = i.item.id;
                const name = i.item.name;
                const price = (i.item.price)*(i.count)
                return {id, name, price}
            })
            }
            //Agregar orden a la collection orders
            const db = getFirestore();
            db.collection('orders').add(order)
            .then(resp => ((resp.id)? setOrdenId(resp.id)  : ""),setSuccess(true))
            .catch(error => console.log(error))
            .finally(()=> setEnable(!enable))
            //Actualizar varios archivos en una sola const
        const itemsToUpdate = db.collection('productos').where(
            firebase.firestore.FieldPath.documentId(),'in', cartList.map(i=> i.item.id))
            const batch = db.batch();
            itemsToUpdate.get()
            .then(collection=>{
                collection.docs.forEach(docSnapshot=>{
                    batch.update(docSnapshot.ref, {
                        stock:docSnapshot.data().stock - cartList.find
                        (i=> i.item.id === docSnapshot.id).count
                    })
                })
                batch.commit().then(res => {
                    console.log('resultado batch: ', res)
                })
            })
            // {success ? (
            //     <div id="miModal" class="modal">
            //             <div class="modal-contenido">
            //                 <Link exact to="/">
            //                     <span>X</span>
            //                 </Link>
            //                 <h2>¡Gracias por confiar en nosotros!</h2>
            //                 {/* <p>Nro.Orden: {resp.id}.</p> */}
            //                 <p>Nos contactaremos con usted para coordinar el pedido</p>
            //             </div>  
            //     </div> 
            // ) :''
            // }

            //Crear collection en firebase
            // const db = getFirestore();
            // db.collection('orders').add(order)
            // .then(resp => console.log(resp.id))
            // .catch(error => console.log(error))
            // .finally(() => {
                //     setFormData({inatialState})
                //     emptyCart()
                // })
            //Actualizar el stock sabiendo el ID
            // const db = getFirestore();
            // db.collection('productos').doc('6qwkEXbcTAuLFPEt2Laf').update
            // ({stock: 40})
            // .then(rta => console.log(rta))
}

const finalizar = () => {
    setFormData({inatialState})
    emptyCart()
}
        //Volver al estado inicial el formData
const inatialState = {
        name: '',
        email:'',
        phone:''
}
    
//VALIDACIONES FORMULARIO
//EMAIL
let texto ;
const validarEmail = () => {
    texto = (document.getElementById("email")).value
    if (texto !== undefined){
        var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regex.test(texto)) {
        agregar("texto")
    }else{
        setHabilitar (habilitar.filter(i => i !== "texto")) 
    } 
    }
    console.log("texto: " + texto)
} 

//Valores numericos
function validarNumeros(evt){
    if(evt.keyCode===8) { //backspace
    return true;
    } else if(evt.keyCode>=48 && evt.keyCode<=57) { //es numero
        return true;
    } else{ 
        return false;      
    }
}
 //CELULAR COMPLETO
let celular;
function celularCompleto(){
    let numeroCelular = (document.querySelector("#celular").value)
    let cadenaCelular = numeroCelular.length;
    if (cadenaCelular > 10 ){
        agregar("celular") 
    }else{
        setHabilitar (habilitar.filter(i => i !== "celular")) 
    }
    console.log("nroCelu: " + celular)
}

//NRO TARJETA COMPLETO 16 DIGITOS
let cardNumber;
function correctCardNumber(){
    cardNumber =(document.querySelector("#card-number").value);
    if (cardNumber.length > 16){
        agregar("cardNumber") 
    }else{
        setHabilitar (habilitar.filter(i => i !== "cardNumber")) 
    }
    console.log ("cardNumber: " + cardNumber)
}

//FECHA VENCIMIENTO TARJETA
const date = new Date();
const mes = date.getMonth() + 1;
const anio = date.getFullYear();
console.log(date)
let vencimientoMes;
let vencimientoAnio;
let vencimiento;
function verificarVencimiento(){
    vencimientoMes = (document.querySelector("#MM").value);
    vencimientoAnio = (document.querySelector("#AA").value);
    if((vencimientoMes > mes) && (vencimientoAnio >= anio)) {
        agregar("vencimiento") 
    } else if((vencimientoMes < mes) && (vencimientoAnio > anio)){
        agregar("vencimiento") 
    }else if((vencimientoMes === mes) && (vencimientoAnio === anio)){
        agregar("vencimiento") 
    }else {
        setHabilitar (habilitar.filter(i => i !== "vencimiento")) 
    }
    console.log("vencimiento" + vencimiento)
}

//VERIFICAR QUE PONGA ALGUN NOMBRE
let nombre = false;
function verificarNombre(){
    let nombres = document.querySelector("#card-holder").value;
    if(nombres !== "" && nombres !== undefined){
        agregar("nombre")
    }else{
        setHabilitar (habilitar.filter(i => i !== "nombre")) 
    }
    console.log("nombre:" + nombre)
}

//HABILITAR BOTON DE PAGAR CUANDO TODOS LOS CAMPOS ESTEN COMPLETOS
nombre = (habilitar.includes("nombre"));
vencimiento = (habilitar.includes("vencimiento"));
texto = (habilitar.includes("texto"));
celular = (habilitar.includes("celular"));
cardNumber = (habilitar.includes("cardNumber"));
let Unable = true;
if ((nombre === true) && (vencimiento === true) && (texto === true) && (celular === true) && (cardNumber === true)){
            Unable = false;
            console.log(Unable)
}
//No agregar datos repetidos a "habilitar[]"
const agregar = (valor) => {
    let index = [];
    index = habilitar.findIndex(i =>valor === i)
    if (index === -1){
        setHabilitar(habilitar => [...habilitar, (valor)])
    }else{
        if( valor !== undefined || valor !== ""){
            habilitar.splice(index, 1)
            setHabilitar([...habilitar, (valor)])
        }
    }
}

return (
        <>
        {/* Si el boton esta habilitado se abre el form */}
            <button className="pagarButton" type="button" onClick={() => {setEnable(!enable);}}>
                {enable ? 'Pagar' : 'Pagar'}
            </button>
                {enable ? 
            ""
            : (
            <main class="page payment-page">
                <section class="payment-form dark">
                <div class="container">
                <form 
                onChange={handleOnChange}
                onSubmit={handleOnSubmit}> 
                    <div className="products">
                    <h3 className="title">Checkout</h3>
                    { 
                    cartList.map(i =><>
                    <div className="item">
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
                        <label for="card-holder">Nombre Titular</label>
                        <input name="name" value={formData.name} onChange={()=>verificarNombre()} id="card-holder" type="text" className="form-control" placeholder="Nombre y Apellido" required/>
                    </div>
                    <div className="form-group col-sm-5">
                        <label for="">Fecha de vencimiento</label>
                        <div className="input-group expiration-date">
                        <input name="month" onChange={()=> verificarVencimiento()} id="MM" type="text" className="form-control" placeholder="MM"  required/>
                        <span className="date-separator"> / </span>
                        <input name="year" onChange={()=> verificarVencimiento()} id="AA" type="text" className="form-control" placeholder="AA"  required/>
                        </div>
                    </div>
                    <div className="form-group col-sm-8">
                        <label for="card-number">Numero tarjeta</label>
                        <input name="card" onChange={()=> correctCardNumber()}id="card-number" type="text" className="form-control" placeholder="xxxx xxxx xxxx xxxx" required/>
                    </div>
                    <div className="form-group col-sm-4">
                        <label for="cvc">CVC</label>
                        <input name="cvc" maxLength="3" id="cvc" type="text" className="form-control" placeholder="CVC" required/>
                    </div>
                    <div className="form-group col-sm-7">
                        <label for="email">E-mail titular</label>
                        <input name="email" value={formData.email} onChange={()=> validarEmail()} id="email" type="text" className="form-control" placeholder="Email" required/>
                    </div>
                    <div className="form-group col-sm-7">
                        <label for="celular">Celular</label>
                        <input name="phone" value={formData.phone} onKeyDown={(evt)=> validarNumeros(evt)} onBlur={()=>celularCompleto()} id="celular" type="text" className="form-control" placeholder="xx xxxx xxxx" required/>
                    </div>
                    <div className="form-group col-sm-12">
                        <button disabled={Unable} type="submit" id="finishPayment" className="btn-primary btn-block">Finalizar Pago</button>
                    </div>
                    </div>
                    </div>
                </form>
                </div>
                </section>
                </main>
            )}
            {success ? (
                <div className="Modal">
                    <div className="ModalContainer">
                    <Link exact to="/">
                                <span onClick={finalizar}>X</span> 
                                </Link>
                                    <h2>¡Gracias por confiar en nosotros {formData.name}!</h2>
                                <p>Tu nro. de orden:<b><i> {ordenId}.</i></b></p> 
                                <p>Nos contactaremos a la brevedad vía Whatsapp para coordinar la entrega</p>
                                <p>Si tenes alguna consulta con respecto al pedido, ¡no dudes en escribirnos!</p>
                                <h3>Gracias por elegirnos...</h3>
                                <h1 className="Firma"><b> Las Chuecas <i class="far fa-heart"></i></b></h1>
                    </div>
                </div>
            ) : ""}
        </>
);
}




export default PaymentForm;
