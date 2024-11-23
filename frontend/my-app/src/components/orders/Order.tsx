import React from 'react';
import { ArrowDown } from 'lucide-react';
import photo from '../sidebar/zhibek.jpeg';
import { ShoppingCart } from 'lucide-react';
import OrderProducts from './OrderProducts';
const Order = () => {
  return (
    <div className='flex flex-col w-4/5 p-16 m-auto'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-semibold'>Order ID: #000004</h3>
                <p className='text-xl text-gray-400'>Mon, July 22, 2024</p>

            </div>
            <div className="relative inline-block w-52">
                <select className="block w-full px-4 py-2 pr-8 text-sm text-gray-500 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300">
                    <option value="" disabled selected>Change status</option>
                    <option value="new">New</option>
                    <option value="in-process">In Process</option>
                </select>
                <div className="absolute top-2 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                    <ArrowDown/>
                </div>
            </div>
        </div>
        <p className='mt-4 mb-12 font-semibold text-green-700 bg-green-300 w-fit rounded-3xl px-2 py-1'>Approved</p>
        <div className='shadow-md gap-8 px-6 py-8 rounded-xl mb-12'>
            <div className='grid grid-cols-2 gap-x-8 gap-y-2'>
                <div className="flex items-around p-4  rounded-lg w-fit gap-2">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                        <img src={photo} alt=""  className='w-full h-full object-cover rounded-3xl'/>
                    </div>
                    <div className="ml-4 flex flex-col gap-2">
                        <h3 className="text-[22px] font-semibold text-gray-700">Customer</h3>
                        <p className="text-base text-gray-500"><strong>Name:</strong> Maria Aniston</p>
                        <p className="text-base text-gray-500"><strong>Email:</strong> mariaaniston@wholesaletronics.com</p>
                        <p className="text-base text-gray-500"><strong>Phone:</strong> +1 (065) 786 55 67</p>
                    </div>
                </div>
                <div className="flex items-around p-4  rounded-lg gap-2">
                    <ShoppingCart className='w-[40px] h-[40px] object-cover rounded-3xl '/> 
                    <div className="ml-4 flex flex-col gap-2">
                        <h3 className="text-[22px] font-semibold text-gray-700">Order Info</h3>
                        <p className="text-base text-gray-500"><strong>Shipping: </strong>Next express</p>
                        <p className="text-base text-gray-500"><strong>Payment method: </strong>Stripe</p>
                        <p className="text-base text-gray-500"><strong>Status: </strong>Approved</p>
                    </div>
                </div>
                
                <div className="flex items-around p-4  rounded-lg w-fit gap-2">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2M3 13h18M5 17h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="ml-4 flex flex-col gap-2">
                            <h3 className="text-[22px] font-semibold text-gray-700">Payment Info</h3>
                            <p className="text-base text-gray-500"><strong>Shipping: </strong>Next express</p>
                            <p className="text-base text-gray-500"><strong>Business Name: </strong>Zhibek Y.</p>
                        </div>
                </div>
                <div className="flex p-4 rounded-lg w-fit gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 8h6" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[22px] font-semibold text-gray-700">Notes</h3>
                        <textarea
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                            rows={2}
                            placeholder="Type some note..."
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-green-700 p-2'>Save</button>
            </div>
        </div>
        <OrderProducts/>
    </div>
  )
}

export default Order