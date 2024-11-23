import React from 'react'
import ProductInformation from './ProductInformation';
import ProductSellers from './ProductSellers';

const Product = () => {
    return (
        <div className='p-16 flex flex-col gap-8'>
            <ProductInformation/>
            <ProductSellers/>
        </div>
    )
}

export default Product