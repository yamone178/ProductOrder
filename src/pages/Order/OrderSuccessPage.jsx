import React from 'react'
import OrderSummary from '../../components/OrderSummary'
import TopNav from '../../components/TopNav'
import { useCart } from '../../context/CartContext'
import SuccessMessage from '../../components/SuccessMessage'
import OrderInformation from './OrderInformation'

const OrderSuccessPage = () => {

    const { personalInfo } = useCart()

    console.log(personalInfo);

    return (
        <div>
            <TopNav />
            <div className=" w-[100%] px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <SuccessMessage message="Order Created Successfully!" />

             
            </div>

            <div className="px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className=' text-[28px] font-bold mb-4'>Order Information</h2>

            <div className="flex md:flex-row sm:flex-col justify-between sm:gap-[10px]  md:gap-[70px]">
            <div className="flex-auto sm:w-full md:w-[65%] ">
                    <OrderInformation />
                    
                </div>


                <OrderSummary name="Save" />
            </div>




            </div>




        </div>
    )
}

export default OrderSuccessPage
