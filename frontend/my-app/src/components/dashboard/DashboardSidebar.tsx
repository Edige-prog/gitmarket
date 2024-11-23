import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import add_product_icon from './Product_Cart.svg';
import product_list_icon from './Product_list_icon.svg';

const DashboardSidebar = () => {

    return (
        <div className="max-w-60 p-4 h-screen justify-start flex flex-col py-8 bg-white gap-5 md:h-auto sm:max-w-none sm:justify-start mt-16 sm:py-4">
            <Link to="/dashboard/new-product">
                <div className="h-fit w-full flex justify-center items-center p-5 bg-gray-100 gap-2.5 mx-5 rounded-lg cursor-pointer sm:mx-0 sm:p-4">
                <img src={add_product_icon} alt="Add Product icon" />
                <p className="text-black">Add Product</p>
                </div>
            </Link>
            <Link to="/dashboard/myproducts">
                <div className="h-fit w-full flex justify-center items-center p-5 bg-gray-100 gap-2.5 mx-5 rounded-lg cursor-pointer md:mx-0 md:p-4">
                <img src={product_list_icon} alt="Product List Icon" />
                <p className="text-black">Product List</p>
                </div>
            </Link>
        </div>
    );
}

export default DashboardSidebar