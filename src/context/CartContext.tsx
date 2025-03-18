import React, {  createContext, useContext, useEffect, useState } from "react";
import { CartItemType, PersonalInfoType, ProductType } from "../type/type";


interface CartContextType{
    cart: CartItemType[] | null, 
    total: number,
    addToCart: (product : ProductType,quantity : number) => void, 
    removeFromCart: (product: ProductType) => void , 
    updateQty: (id : number, quantity: number) => void, 
    discount: number,
    personalInfo: PersonalInfoType ,
    addPersonalInfo: (info : PersonalInfoType) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderPropsType{
    children: React.ReactNode
}

export const CartProvider = ({children}:CartProviderPropsType) => {
    const [cart, setCart] = useState<CartItemType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({});
 
    const addToCart = (product : ProductType,quantity : number) : void => {
        
        setCart((prevCart) => {
            const existingItem = prevCart.find((item)=> item.id === product.id);
            if(existingItem){
                return prevCart.map((item)=>
                item.id === product.id ?{...item, quantity: item.quantity + quantity} : item)
            }

            return [...prevCart, {...product, quantity: quantity}];
        });

       
    }

    const updateQty = (id : number, quantity: number) : void =>{
        setCart((prevCart) =>{
            return prevCart.map((item) => item.id === id ? {...item, quantity: quantity} : item)
        })
    }

    const removeFromCart = (product : ProductType) => {
        setCart(cart.filter((item) => item.id !== product.id));
    }

    const addPersonalInfo = (info : PersonalInfoType) => {
        setPersonalInfo(info)
    }

    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const newNumber = newTotal*0.1
        setTotal(newTotal);
        setDiscount(parseFloat(newNumber.toFixed(1)));
    }, [cart]);

    const contextValue: CartContextType ={
              cart, 
            total,
             addToCart, 
             removeFromCart, 
             updateQty, 
             discount,
              personalInfo, 
              addPersonalInfo
            }
    
    return (
        <CartContext.Provider value={ contextValue} >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = ():CartContextType => {
   const context = useContext(CartContext)
   if(context === undefined)
   {
    throw new Error("useCart must be used within a CartProvider");
   }
   return context
}