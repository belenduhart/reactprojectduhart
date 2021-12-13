//Mostrar formulario
import React from 'react';
//Styles
import '../Cart.css'

//Components
import { useCartContext} from '../../CartContext/CartContext';
import Form from './Form';

//Utilities
import { useState } from "react";
import { getFirestore } from '../../../services/getFireBase';
import firebase from 'firebase';
import 'firebase/firestore';
import PaymentSuccess from './PaymentSuccess';


const PaymentForm = () =>{
    const{ cartList }= useCartContext() 
    const { cartTotalAmount } = useCartContext()
    const {emptyCart} = useCartContext()
    //Mostrar form
    const [enable, setEnable] = useState(true);
    //verificacion form
    const [ habilitar, setHabilitar] = useState([]);
    const [success, setSuccess] = useState(false)
    const [ordenId, setOrdenId] = useState()

    //Datos que se envian a la DB
const [formData, setFormData]= useState({
    name: '',
    email:'',
    phone:''
})

//Obtencion datos
const handleOnChange = (e)=> {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

//Creacion de la orden para la DB
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
            const db = getFirestore();
            db.collection('orders').add(order)
            .then(resp => ((resp.id)? setOrdenId(resp.id)  : ""),setSuccess(true))
            .catch(error => console.log(error))
            .finally(()=> setEnable(!enable))
}

//Payment success => finalizar compra
function finalizar () {
    emptyCart();
    setFormData({inatialState});
    window.location.replace('/');
}

//Vaciar datos
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
 //Celular completo
let celular;
function celularCompleto(){
    let numeroCelular = (document.querySelector("#celular").value)
    let cadenaCelular = numeroCelular.length;
    if (cadenaCelular > 10 ){
        agregar("celular") 
    }else{
        setHabilitar (habilitar.filter(i => i !== "celular")) 
    }
}

//Fecha vencimiento tarjeta
const [mostrarError, setMostrarError] = useState("");
const date = new Date();
const mes = date.getMonth() + 1;
const anio = date.getFullYear();
let vencimientoMes;
let vencimientoAnio;
let vencimiento;
function verificarVencimiento(){
    vencimientoMes = (document.querySelector("#MM").value);
    vencimientoAnio = (document.querySelector("#AA").value);
    if((vencimientoMes > mes && vencimientoMes <= 12 ) && (vencimientoAnio >= anio)) {
        agregar("vencimiento") 
        setMostrarError("");
    } else if((vencimientoMes < mes) && (vencimientoAnio > anio)){
        agregar("vencimiento") 
        setMostrarError("");
    }else if((vencimientoMes === mes) && (vencimientoAnio === anio)){
        agregar("vencimiento") 
        setMostrarError("");
    }else if((vencimientoMes > 12) || (vencimientoAnio< anio)){
        setHabilitar (habilitar.filter(i => i !== "vencimiento")) 
        setMostrarError("Vencimiento inválido");
    }
}

//Verificar que ponga algun nombre
let nombre = false;
function verificarNombre(){
    let nombres = document.querySelector("#card-holder").value;
    if(nombres !== "" && nombres !== undefined){
        agregar("nombre")
    }else{
        setHabilitar (habilitar.filter(i => i !== "nombre")) 
    }
}

//HABILITAR BOTON DE PAGAR CUANDO TODOS LOS CAMPOS ESTEN COMPLETOS
nombre = (habilitar.includes("nombre"));
vencimiento = (habilitar.includes("vencimiento"));
texto = (habilitar.includes("texto"));
celular = (habilitar.includes("celular"));
let Unable = true;
if ((nombre === true) && (vencimiento === true) && (texto === true) && (celular === true)){
            Unable = false;
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
            <button className="pagarButton" type="button" onClick={() => {setEnable(!enable);}}>
                {enable ? 'Pagar' : 'Pagar'}
            </button>
                {enable ? 
            ""
            : (
                <Form handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit} 
                cartList={cartList} 
                formData={formData}
                verificarNombre={verificarNombre}
                verificarVencimiento={verificarVencimiento}
                validarEmail={validarEmail}
                validarNumeros={validarNumeros}
                celularCompleto={celularCompleto}
                mostrarError={mostrarError}
                Unable={Unable}
                />
            )}
            {success ? (
                <div className="Modal">
                    <PaymentSuccess finalizar={finalizar} ordenId={ordenId} name={formData.name}/>
                </div>
            ) : ""}
        </>
);
}




export default PaymentForm;
