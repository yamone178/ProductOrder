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
            <div className=" w-[100%] md:px-4 py-5 mx-auto max-w-7xl px-6 lg:px-8 animate__animated animate__fadeIn">
                <SuccessMessage message="Order Created Successfully!" />

             
            </div>

            <div className="px-4 py-3 mx-auto md:px-6 max-w-7xl lg:px-8">
            <h2 className=' text-[28px] font-bold mb-4 animate__animated animate__slideInLeft '>Order Information</h2>

            <div className="flex md:flex-row flex-col justify-between gap-[30px]  md:gap-[70px]">
            <div className="flex-auto sm:w-full md:w-[65%] animate__animated animate__slideInLeft ">
                    <OrderInformation />
                    
                </div>


                <OrderSummary name="Save" />
            </div>




            </div>




        </div>
    )
}

export default OrderSuccessPage
