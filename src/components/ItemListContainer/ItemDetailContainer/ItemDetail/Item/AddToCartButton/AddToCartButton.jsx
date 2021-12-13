//Botones para ir al carrito o seguir comprando
import React from "react";

//Styles
import "./AddCartButton.css";

//Components
import { useCartContext } from "../../../../../CartContext/CartContext";

//Utilities
import {Link} from "react-router-dom";
import { useState } from "react";

import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from "../../../../../../services/getFireBase";



const AddToCartButton = ({item, stock, count, onAdd})=>{
    const {cartList} = useCartContext()
    const { addItem } = useCartContext()
    const {ColorPrenda} = useCartContext()
    const [inputType, setInputType] = useState('button')


    const AddButton = ()=>{
        return (
            <>
            <div className="buttonContainer">
                <div className="btn" onClick = {AgregarAlCarrito}>
                    <span className="flip-front">¡Agregar al carrito!</span>
                    <span className="flip-back">¡Agregame!</span>
                </div>
            </div>
            </>
        )
    }

    
    const SuccessButton = ({count})=>{
        return (
            <>
            <div>¡Agregamos {count} productos al carrito!</div>
            <div className="containerBotonesSuccess">
            <Link exact to="/cart">
            <div className="buttonContainer" >
                <div className="btn2">
                    <span className="flip-front2">¡Terminar compra!</span>
                    <span className="flip-back2">¡Vamos al carrito!</span>
                </div>
            </div>
            </Link>
            <Link exact to="/categoria">
            <div className="buttonContainer">
                <div className="btn2">
                    <span className="flip-front2">¡Seguir comprando!</span>
                    <span className="flip-back2">¡Sigamos!</span>
                </div>
            </div>
            </Link>
            </div>
            </>
        )
    }

        const Intercambiar = ()=>{
            setInputType('input')
        }
        const ActualizarStock = () =>{
                            const db = getFirestore();
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
                    })
                })
            }


        const AgregarAlCarrito = () => {
            addItem(item, count)
            onAdd(count)
            Intercambiar()
            ColorPrenda()
        }

    return(
        <>
        
        {(inputType === 'button') ?
        <AddButton/> : <SuccessButton onClick={ActualizarStock()}stock={stock} count={count}/> 
        }
        </>
    )
}

export default AddToCartButton;