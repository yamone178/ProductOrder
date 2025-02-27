import React, { useState } from 'react'
import img from '../../assets/Meryl_Lounge_Chair_Teal_3 1 (1).png'

const ProductImage = ({product}) => {

  const [currentImg, setCurrentImg] = useState(img)

  return (
    <div className="flex flex-col-reverse">
    <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
       <h2 className=" mb-3">
        <span className=' text-[32px] font-bold'>01</span>
        <span className=' text-[24px] text-light_gray font-bold'> / 05</span>
       </h2>

      <div className="grid grid-cols-5 gap-6" aria-orientation="horizontal">
        
        {product.thumbnails.map((i) => (
          <button
            key={i}
            onClick={() => setCurrentImg(i)}
            className="relative w-[104px]  ring-2 ring-border h-24 bg-background rounded-md inline-block text-sm font-medium uppercase text-text-primary cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring  focus:ring-offset-4 focus:ring-primary"

         >
            <div className="absolute inset-0 rounded-md overflow-hidden p-2 ">
              <img
                src={i}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>

    <div className="w-full aspect-w-1 aspect-h-1">
      <img
        src={currentImg}
        alt="Meryl Lounge Chair"
        className="w-full h-full object-center object-cover sm:rounded-lg"
      />
    </div>
  </div>
  )
}

export default ProductImage
