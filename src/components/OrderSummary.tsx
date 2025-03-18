import React, { useEffect } from 'react'
import { GoTag } from "react-icons/go";
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';
import { PersonalInfoType } from '../type/type';


type PropsType = {
  name: string | null,
  route?: string | null,
  formData?: PersonalInfoType | null
  
}

const OrderSummary = ({name, route, formData}: PropsType) => {

    const { total, discount, addPersonalInfo} = useCart()


    const navigate = useNavigate()
    
    const handleSubmit = (): void => {
      if (formData) {
        addPersonalInfo(formData)
      }
      if (route) {
        navigate(route)
      }
    }

  return (
    
    <div className=" animate__animated animate__zoomIn h-min w-full p-[30px] bg-white border border-border_light rounded md:w-80 lg:w-[380px]">
        <div className="">
        <h3 className="mb-4 text-xl font-semibold">Order Summary</h3>

<div className="space-y-6 text-sm my-[30px]">
  <div className="flex justify-between">
    <span>Price</span>
    <span>${total}</span>
  </div>

  <div className="flex justify-between">
    <span>Discount</span>
    <span>${discount}</span>
  </div>

  <div className="flex justify-between">
    <span>Shipping</span>
    <span className='text-green-600 '>Free</span>
  </div>

  <div className="flex justify-between">
    <span>Coupon Applied</span>
    <span>$0.00</span>
  </div>
</div>
  
<hr  className='space-y-6 text-border_light'/>

<div className=" my-[20px]">
    
<div className="flex justify-between ">
  <span>TOTAL</span>
  <span className='font-semibold '>${(total - discount).toFixed(2)}</span>

</div>

<div className="flex justify-between mt-4 text-sm">
  <span>Estimated Delivery by</span>
  <span className='font-semibold '>01 Feb, 2023</span>
</div>

{ name !== 'Save' &&
  <div className="relative mt-4">
  <input
    type="text"
    placeholder="Coupon Code"
    // value={couponCode}
    // onChange={handleCouponChange}
    className="w-full px-4 py-3 border rounded text-[16px] border-border_light"
  />
  <button className="absolute transform -translate-y-1/2 right-2 top-1/2">
    <GoTag className=' w-[19px] h-[19px] text-secondary' />
  </button>
</div>}
</div>

<button onClick={handleSubmit} className="w-full py-2 mt-4 text-white transition-colors bg-teal-500 rounded hover:bg-teal-600">
    {name == 'Save' ? 'Save to Gallery' : name == 'Buy' ? 'Buy' : 'Proceed to Checkout'}
</button>
        </div>
  </div>
  )
}

export default OrderSummary
