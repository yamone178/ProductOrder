import {  createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [personalInfo, setPersonalInfo] = useState({});
 
    const addToCart = (product,quantity) => {
        
        setCart((prevCart) => {
            const existingItem = prevCart.find((item)=> item.id === product.id);
            if(existingItem){
                return prevCart.map((item)=>
                item.id === product.id ?{...item, quantity: item.quantity + quantity} : item)
            }

            return [...prevCart, {...product, quantity: quantity}];
        });

       
    }

    const updateQty = (id, quantity) =>{
        setCart((prevCart) =>{
            return prevCart.map((item) => item.id === id ? {...item, quantity: quantity} : item)
        })
    }

    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product.id));
    }

    const addPersonalInfo = (info) => {
        setPersonalInfo(info)
    }

    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
        setDiscount(Number(newTotal*0.1).toFixed(1));
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, total, addToCart, removeFromCart, updateQty, discount, personalInfo, addPersonalInfo}}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);