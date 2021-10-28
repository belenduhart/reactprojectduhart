import {React} from 'react';
import {useState, createContext, useContext} from 'react';

import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from '../../services/getFireBase';
export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({defaultValue = [], children})=>{
    const [cartList, setCartList] = useState(defaultValue);

    const addItem = (item, count) => {
        let indexOfProduct = [];
        indexOfProduct = cartList.findIndex(i => i.item.id === item.id)
        if (indexOfProduct === -1){
            setCartList(cartList => [...cartList, {item, count}])
        }else{
            const previousCount = cartList[indexOfProduct].count
                cartList.splice(indexOfProduct, 1)
                setCartList([...cartList, { item, count: count + previousCount}])
        }
    }
    const removeItem = (id) =>{
        ActualizarStockRemove()
        setCartList (cartList.filter(({item}) => item.id !== id))
    }

    const ActualizarStockRemove = () =>{
        const db = getFirestore();
        const itemsToUpdate = db.collection('productos').where(
        firebase.firestore.FieldPath.documentId(),'in', cartList.map(i=> i.item.id))
        const batch = db.batch();
        itemsToUpdate.get()
        .then(collection=>{
        collection.docs.forEach(docSnapshot=>{
            batch.update(docSnapshot.ref, {
                stock:docSnapshot.data().stock + cartList.find
                (i=> i.item.id === docSnapshot.id).count
            })
        })
        batch.commit().then(res => {
            console.log('resultado batch: ', res)
        })
        })
}
    const emptyCart = () =>{
        setCartList([])
    }
    const cartTotalAmount = () =>{
        let total = 0;
        cartList.forEach (
            item =>{
                total += ((item.item.price) * (item.count))
            }
            
        )
        return (total)
    }
    const cartTotalCount = () =>{
        let totalCount = 0;
        cartList.forEach (
            item => { 
                totalCount += (item.count) 
            }
        )
    return(totalCount)
}
let color;
const [colorSeleccionado, setcolorSeleccionado]= useState()
const ColorPrenda = ()=>{
    let getSelectValue;
    getSelectValue =document.querySelector("#colorselector");
    color =getSelectValue.options[getSelectValue.selectedIndex].text
    setcolorSeleccionado(color)
}
    return(
            <>
            <CartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            emptyCart,
            cartTotalAmount,
            cartTotalCount,
            ColorPrenda,
            colorSeleccionado,
            }}>
                    {children}
            </CartContext.Provider>
            </>
        )

}