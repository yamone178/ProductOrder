import React from 'react'
import TopNav from '../../components/TopNav'
import ProductSection from './ProductSection'
import img6 from '../../assets/img6 (2).png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'

const OrderPage = () => {

  const product ={
    id: 1,
    title: "Meryl Lounge Chair",
    price: 149.99, 
    color: "Lysed bright green",
    des: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",
    rating: 4.6,
    review: 556,
    quantity: 1,
    thumbnails: [ img2, img3, img4, img5, img6]
  }

  return (
    <div className="relative">
       <div className="gradient-box top-[30%] hidden lg:block right-0"></div>
      
      <TopNav />
      <ProductSection  product={product}/>
    </div>
  )
}

export default OrderPage

