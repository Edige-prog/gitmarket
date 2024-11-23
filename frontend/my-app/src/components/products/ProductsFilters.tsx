import React, { useEffect, useState } from 'react'
import { ProductsFilter } from './Products'
import { useDebounce } from './useDebounce';

type ProductsFiltersProps = {
    onChange: (filter: ProductsFilter) => void
};

const ProductsFilters = ({onChange}: ProductsFiltersProps) => {
    
    const [search, setSearch] = useState<ProductsFilter['search']>();
    const debauncedValue = useDebounce(search);

    useEffect(()=>{
        onChange({search: debauncedValue});
    }, [debauncedValue]);

    return (
        <input 
            className='py-2 px-4 border rounded-lg'
            type='text' 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} 
            placeholder='Search Products...'
        />
    )
}

export default ProductsFilters