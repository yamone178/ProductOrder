import React, { useEffect, useState } from 'react'
import img from '../../assets/Product_Image.png'
import { ProductType } from '../../type/type'

type PropsType = {
  product : ProductType
}

const ProductImage = ({product}: PropsType) => {

  const [currentImg, setCurrentImg] = useState<string>(img)
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0)


  const handleChangeImg = (img : string, index : number) : void => {
    setCurrentImgIndex(index)
    setCurrentImg(img)
  }

 

  return (
    <div className="flex flex-col-reverse mt-7 md:mt-0">
    <div className="w-full max-w-2xl mx-auto mt-6 lg:max-w-none">
       <h2 className="mb-3 ">
        <span className=' text-[32px] font-bold'>0{currentImgIndex+1}</span>
        <span className=' text-[24px] text-light_gray font-bold'> / 0{product.thumbnails.length}</span>
       </h2>

      <div className="grid grid-cols-5 gap-6" >
        
        {product.thumbnails.map((img : string,i: number) => (
          <button
            key={i}
            onClick={() => handleChangeImg(img, i)}
            className="relative w-[60px] md:w-[104px]  ring-2 ring-border h-24 bg-background rounded-md inline-block text-sm font-medium uppercase text-text-primary cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring  focus:ring-offset-4 focus:ring-primary"

         >
            <div className="absolute inset-0 p-2 overflow-hidden rounded-md ">
              <img
                src={img}
                alt="thumbnail img"
                className="object-cover object-center w-full h-full "
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
        className={`object-cover object-center h-full mx-auto my-0 sm:rounded-lg animate__animated animate__slideInRight`}
        />
    </div>
  </div>
  )
}

export default ProductImage
