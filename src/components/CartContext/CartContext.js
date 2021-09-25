import {React} from 'react';
import {useState, createContext, useContext} from 'react';

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({defaultValue = [], children})=>{
    const [cartList, setCartList] = useState(defaultValue);

    //Agregar items al carrito
    const addItem = (item, count) => {
        //No se deben repetir los productos en el carrito, sino, sumar las cantidades.
        let indexOfProduct = [];
        indexOfProduct = cartList.findIndex(i => i.item.id === item.id)
        //Si no lo encuentra index= -1 else 0 <=
        if (indexOfProduct === -1){
            //agrego todo el detalle del producto
            setCartList(cartList => [...cartList, {item, count}])
        }else{
            const previousCount = cartList[indexOfProduct].count

            cartList.splice(indexOfProduct, 1)
            setCartList([...cartList, { item, count: count + previousCount}])
        }
        console.log(cartList)
    }
    //Eliminar un producto
    const removeItem = (id) =>{
        setCartList (cartList.filter(({item}) => item.id !== id))
    }
    //Vaciar todo el carrito
    const emptyCart = () =>{
        setCartList([])
    }

    //Total amount del carrito
    const cartTotalAmount = () =>{
        let total = 0;
        cartList.forEach (
            item => { total += ((item.item.price) * (item.count))})
        return (total)
    }

    //Total Productos
    const cartTotalCount = () =>{
        let totalCount = 0;
        cartList.forEach (
            item => { totalCount += (item.count)})
        return (totalCount)
    }

    return(
            <>
            <CartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            emptyCart,
            cartTotalAmount,
            cartTotalCount
            }}>
                    {children}
            </CartContext.Provider>
            </>
        )

}