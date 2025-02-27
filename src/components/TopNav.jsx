import React, { useEffect } from 'react'
import cartImg from '../assets/shopping-cart.png'
import { useCart } from '../context/CartContext'
import { NavLink } from 'react-router-dom'

const TopNav = () => {

  const {cart} = useCart()

 useEffect(() =>{
    console.log(cart)
 }, [cart])

  return (
    <header className="border-b border-border">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-xl font-bold text-text-primary">
              Cozy®
            </a>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <a href="#" className="nav-link">
              SHOP
            </a>
            <a href="#" className="nav-link">
              COLLECTIVE
            </a>
            <a href="#" className="nav-link">
              DESIGNERS
            </a>
            <a href="#" className="nav-link">
              ABOUT US
            </a>
            <a href="#" className="nav-link">
              CONTACT
            </a>
          </nav>
          <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <NavLink to="/cart" className="relative ml-8">
              { cart.length > 0 && <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-primary text-white text-[10px] rounded-full">
                {cart.length}
              </span>}
              <img src={cartImg} alt="Cart" className="w-6 h-6" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopNav
