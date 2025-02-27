import React from 'react'
import TopNav from '../../components/TopNav'
import { useCart } from '../../context/CartContext'
import CartItem from '../../components/CartItem'
import OrderSummary from '../../components/OrderSummary'

const Cart = () => {

  const { cart } = useCart()

  return (
    <div>
      <TopNav />
      <main className="flex justify-between gap-[70px] body-container">
        <div className="flex-auto w-[65%] ">
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
              <h2>No cart Item</h2>

          }
        </div>

        
          <OrderSummary name="Proceed to Checkout" route="/checkout" />
      </main>




    </div>
  )
}

export default Cart
