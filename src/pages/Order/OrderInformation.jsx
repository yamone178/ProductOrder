import React from 'react'
import { useCart } from '../../context/CartContext'
import PersonalInfoText from '../../components/PersonalInfoText'

const OrderInformation = () => {

    const { personalInfo, cart} = useCart()

  return (
    <div>
     
      <hr className=" text-border" />
     <div className="mt-8">
        <div className="">
             <PersonalInfoText label="Order Number" value="008834TVU" />
        </div>

        <div className="flex justify-between mt-8">
            <PersonalInfoText label="Name" value={personalInfo.name} />
            <PersonalInfoText label="Email Address" value={personalInfo.email} />
            <PersonalInfoText label="Phone Number" value={personalInfo.phone} />

        </div>
       
        <hr className="my-8 text-border" />

        <div className="flex  gap-[100px]">
            <PersonalInfoText label="Shipment" value={personalInfo.shipmentMethod} />
            <PersonalInfoText label="Payment Method" value={personalInfo.paymentMethod} />

        </div>
        <div className="mt-8">
            <PersonalInfoText label="Address" value={personalInfo.address} />
        </div>

     </div>
    </div>
  )
}

export default OrderInformation
