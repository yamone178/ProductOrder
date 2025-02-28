import React, { useMemo, useState } from 'react'
import TopNav from '../../components/TopNav'
import OrderSummary from '../../components/OrderSummary'
import InputBox from '../../components/inputBox'
import RadioBox from '../../components/RadioBox'

const CheckOut = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        shipmentMethod: 'free',
        paymentMethod: 'cash'

    })

    const handleInputChange = (e) => {

        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

   
    return (
        <div>
            <TopNav />
            <main className="flex justify-between md:flex-row sm:flex-col sm:gap-[10px]  md:gap-[70px] body-container">
                <div className=' sm:w-full md:w-[65%]'>
                    <form action="" >
                        <div className="mb-6">
                            <h2 className="mb-4 text-lg font-bold">Personal Information</h2>
                            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                                <InputBox
                                    name='name'
                                    placeholder='Name'
                                    value={formData.name}
                                    handleInputChange={handleInputChange}
                                />
                                <InputBox
                                    name='email'
                                    placeholder='Email Address'
                                    value={formData.email}
                                    handleInputChange={handleInputChange}
                                />
                            </div>
                            <InputBox
                                name='phone'
                                placeholder='Phone Number'
                                value={formData.phone}
                                handleInputChange={handleInputChange}
                            />
                            <textarea
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full px-3 py-2 mt-5 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                            />
                        </div>

                        {/* Shipment Method */}
                        <div className="mb-8">
                            <h2 className="mb-4 text-lg font-bold">Shipment Method</h2>
                            <div className="">
                                <RadioBox 
                                    checked={formData.shipmentMethod === "free"}
                                    handleInputChange={handleInputChange}
                                    name="shipmentMethod"
                                    value="free"
                                    title={<><strong>Free</strong> Yangon</>}
                                />
                                <RadioBox 
                                    checked={formData.shipmentMethod === "paid"}
                                    handleInputChange={handleInputChange}
                                    name="shipmentMethod"
                                    value="paid" 
                                    title={<><strong>$8.50</strong> Mandalay</>}
                                 />
                              
                               
                            </div>
                        </div>

                         {/* Shipment Method */}
                         <div className="mb-6">
                            <h2 className="mb-4 text-lg font-bold">Paymenthod Method</h2>
                            <div className="">
                                <RadioBox 
                                    checked={formData.paymentMethod === "cash"}
                                    handleInputChange={handleInputChange}
                                    name="paymentMethod"
                                    value="cash"
                                    title={<><strong>Cash On Delivery.</strong> Regualar payment</>}
                                />
                                <RadioBox 
                                    checked={formData.paymentMethod === "kbz"}
                                    handleInputChange={handleInputChange}
                                    name="paymentMethod"
                                    value="kbz" 
                                    title={<><strong>KBZ Pay</strong> Digital Payment</>}
                                 />
                              
                               
                            </div>
                        </div>
                    </form>
                </div>

                <OrderSummary name="Buy" route="/order-success" formData={formData} />
            </main>



        </div>
    )

}

export default CheckOut
