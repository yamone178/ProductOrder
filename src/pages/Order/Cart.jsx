import React from 'react'
import TopNav from '../../components/TopNav'
import { useCart } from '../../context/CartContext'
import CartItem from '../../components/CartItem'
import OrderSummary from '../../components/OrderSummary'
import { AiOutlinePercentage } from 'react-icons/ai'

const Cart = () => {

  const { cart } = useCart()

  return (
    <div>
      <TopNav />
      <main className="flex md:flex-row flex-col justify-between gap-[10px]  md:gap-[70px] body-container">
        <div className="flex-auto md:w-[65%] w-full">
          <h2> <span className='font-bold text-[32px] mb-5'>Cart</span> <span className='font-bold  text-light_gray text-[20px] inline-block ml-3'>{cart.length} ITEM{cart.length > 1 ? 'S' : ''}</span></h2>

          {
            cart && cart.length > 0 ?

              <div className="">
                {
                  cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))
                }
              </div>

              :
              <h2 className='p-3 py-5 mt-4 text-2xl font-semibold text-center bg-gray-100 text-red'>! No cart Item</h2>

          }
 
          <div className="px-5 py-5 my-10 font-medium border rounded border-primary bg-alert_bg">
            <h4 className='flex items-center gap-3'> <AiOutlinePercentage  className='text-2xl text-primary '/>  10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA</h4>
          </div>
        </div>

        
          <OrderSummary name="Checkout" route="/checkout" />
      </main>




    </div>
  )
}

export default Cart
