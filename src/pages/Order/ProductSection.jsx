import React, { useState } from 'react'

import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import ProductImage from './ProductImage'
import { useCart } from '../../context/CartContext'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoStar } from 'react-icons/io5';


const ProductSection = ({product}) => {

  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const decrementQuantity = () => { 
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1) 
  }

  return (
    <main className=" body-container md:py-[100px] sm:py-[20px]">
    <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-8 ">

    <div className='animate__animated animate__slideInLeft'>
      <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0 lg:w-[500px]">
        <h1 className="text-[44px] font-extrabold tracking-tight text-text-primary">{product.title}</h1>
       
       <div className="flex justify-between ">
          <div className="mt-3">
              <p className="text-2xl font-bold text-text-primary">${product.price}</p>
       </div>

        {/* Reviews */}
        <div className="mt-3">
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <IoStar
                  key={rating}
                  className={`${rating < 4 ? "text-yellow-400 " : "text-gray-300"} h-5 w-5 flex-shrink-0`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-text-secondary">4.6/5.0 <span className=' text-light_gray'>({product.review})</span></p>
          </div>
        </div>
       </div>
              
       <div className="mt-6 ">
          <p className="text-base font-normal">
           {product.des}
          </p>
        </div>

        <div className="mt-10">
          <div className="flex gap-6 sm:flex-col1 ">
            
              <div className="relative flex items-center max-w-[160px]  border-2 border-input rounded">
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

            <button 
            onClick={() =>addToCart(product,quantity)}
            type="submit" className=" btn-primary w-[174px]  cursor-pointer">
              Add to cart
            </button>
          </div>

          <div className="flex items-center mt-3 space-x-4">
            <p className="flex items-center text-[16px]">
              Free 3 to 5 day shipping . Tool-free assembly . 30-day trial
            </p>
           
          </div>

        </div>
        </div>
       
        <div className=" sm:relative md:absolute bottom-0 flex items-center justify-between mt-6 space-x-4 lg:w-[500px]">
            <button className="flex items-center font-semibold text-primary">
              <AiOutlineHeart className="w-5 h-5 mr-1 " />
              Add to Wishlist
            </button>
            <div className="flex items-center w-[136px] justify-between  ">
                <FaFacebook className='w-[16px] h-[16px] ' />
                <FaTwitter className='w-[16px] h-[16px] '/>
                <FaPinterest className='w-[16px] h-[16px] '/>
                <FaInstagram className='w-[16px] h-[16px] '/> 
            </div>
        </div>

        
      </div>

      {/* Image gallery */}
     <ProductImage product={product} /> 

    
    </div>
  </main>
  )
}

export default ProductSection
