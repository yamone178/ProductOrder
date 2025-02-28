import React, { useState } from 'react'
import QtyCount from './QtyCount'
import { useCart } from '../context/CartContext'

const CartItem = ({item}) => {

    const [quantiy, setQuantity] = useState(item.quantity)

        const {updateQty, removeFromCart} = useCart()
    
  return (
    <div className="animate__animated animate__fadeIn mt-[30px] flex justify-between  border-b border-b-border_light md:pb-0 pb-[20px] ">
      <div className="flex ">
        <div className=" w-[160px] p-3 ">
            <img src={item.thumbnails[0]} alt="" className='w-full ' />
        </div>

        <div className="">
            <h3 className='font-bold  text-[20px] mb-2'>{item.title}</h3>
            <h3 className='font-bold text-[16px] mb-5'><span className=' text-light_gray'>Color &nbsp;</span><span className=''>{item.color}</span></h3>
       
            <div className="flex items-center justify-between gap-3 cursor-pointer">
                 <QtyCount qty={item.quantity} id={item.id}/>
                <p 
                onClick={() => removeFromCart(item)}
                className='font-bold text-red'>Remove</p>
            </div>
        </div>
      </div>

      <div>
        <p className='text-xl font-bold'>
            {item.price * item.quantity}
        </p>
      </div>
       
    </div>
  )
}

export default CartItem
