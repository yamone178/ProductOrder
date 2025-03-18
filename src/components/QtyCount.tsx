import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCart } from '../context/CartContext'

const QtyCount = ({qty, id}) => {

    const [quantity, setQuantity] = useState(qty)
    const {cart} = useCart()

    const {updateQty} = useCart()    
      const decrementQuantity = () => { 
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
      }
    
      const incrementQuantity = () => {
        setQuantity((prev) => prev + 1) 
      }
    
      useEffect(() =>{
        console.log(quantity, id);
        
       updateQty(id, quantity)
       console.log(cart);
       
        
      }, [quantity])
    
  return (
      <div className="relative flex items-center max-w-[160px]  border-1 border-border_light rounded">
                    <button
                      type="button"
                      className="p-3 h-11 focus:ring-2 focus:ring-ring focus:outline-none"
                      onClick={decrementQuantity}
                    >
                      <AiOutlineMinus className="text-xl font-bold " />
                    </button>
                    <input
                      type="text"
                      id="quantity"
                      className=" text-xl font-bold h-11 text-center text-sm focus:ring-2 focus:ring-ring focus:border-ring block w-full py-2.5"
                       value={quantity}
                     
                    />
                    <button
                      type="button"
                      className="p-3 hover:bg-gray-200 rounded-e-lg h-11 focus:ring-2 focus:ring-ring focus:outline-none"
                       onClick={incrementQuantity}
                    >
                      <AiOutlinePlus className="text-xl font-bold " />
                    </button>
                  </div>
  )
}

export default QtyCount
