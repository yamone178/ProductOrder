import React from 'react'
import TopNav from '../../components/TopNav'
import ProductSection from './ProductSection'
import img1 from '../../assets/langfjaell-office-chair-with-armrests-gunnared-beige-black__0461403_PE607530_S5 1.png'
import img2 from '../../assets/Rectangle 2.png'
import img4 from '../../assets/Rectangle 4.png'
import img5 from '../../assets/Rectangle 5.png'
import img6 from '../../assets/Rectangle 6.png'

const OrderPage = () => {

  const product ={
    id: 1,
    title: "Meryl Lounge Chair",
    price: 149.99, 
    color: "Lysed bright green",
    des: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",
    rating: 4.6,
    review: 556,
    thumbnails: [ img2, img4, img5, img6, img1]
  }

  return (
    <div>
      <TopNav />
      <ProductSection  product={product}/>
    </div>
  )
}

export default OrderPage

