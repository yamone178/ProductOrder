import React, { useState } from 'react'
import img from '../../assets/Product Image.png'
import { ImGoogle3 } from 'react-icons/im'

const ProductImage = ({product}) => {

  const [currentImg, setCurrentImg] = useState(img)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handleChangeImg = (img, index) => {
    setCurrentImgIndex(index)
    setCurrentImg(img)
  }

  return (
    <div className="flex flex-col-reverse">
    <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
       <h2 className="mb-3 ">
        <span className=' text-[32px] font-bold'>0{currentImgIndex+1}</span>
        <span className=' text-[24px] text-light_gray font-bold'> / 0{product.thumbnails.length}</span>
       </h2>

      <div className="grid grid-cols-5 gap-6" aria-orientation="horizontal">
        
        {product.thumbnails.map((img,i) => (
          <button
            key={i}
            onClick={() => handleChangeImg(img, i)}
            className="relative w-[104px]  ring-2 ring-border h-24 bg-background rounded-md inline-block text-sm font-medium uppercase text-text-primary cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring  focus:ring-offset-4 focus:ring-primary"

         >
            <div className="absolute inset-0 p-2 overflow-hidden rounded-md ">
              <img
                src={img}
                alt=""
                className="object-cover object-center w-full h-full"
              />
            </div>
          </button>
        ))}
      </div>
    </div>

    <div className="">
      <img
        src={currentImg}
        alt="Meryl Lounge Chair"
        className="object-cover object-center h-full mx-auto my-0 sm:rounded-lg "
      />
    </div>
  </div>
  )
}

export default ProductImage
