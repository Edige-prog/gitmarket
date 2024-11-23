import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useDebounce } from './useDebounce';
import ProductsFilters from './ProductsFilters';
import ProductComponent from './ProductComponent';
import './Products.css';
import PriceRange from './PriceRange';

interface ProductData {
    id: number, 
    name: string, 
    description: string, 
    price: number,
    category: string,
    imageUrl: string,
    availableQuantity: number
};

const PRODUCT_DATA: Array<ProductData> = [
    {
      "id": 1,
      "name": "Organic Corn",
      "description": "Fresh organic corn harvested from sustainable farms, perfect for grilling or boiling.",
      "price": 320,
      "category": "Vegetables",
      "imageUrl": "https://images.unsplash.com/photo-1506807803488-8eafc15316c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "availableQuantity": 150
    },
    {
      "id": 2,
      "name": "Ripe Avocados",
      "description": "Creamy, ripe avocados perfect for making guacamole or adding to your favorite salad.",
      "price": 180,
      "category": "Fruits",
      "imageUrl": "https://cdn.britannica.com/86/234086-050-53D32699/Whole-and-sliced-avocado-on-wooden-table.jpg",
      "availableQuantity": 190
    },
    {
      "id": 3,
      "name": "Wheat Flour",
      "description": "High-quality, organic wheat flour suitable for baking bread, cakes, and pastries.",
      "price": 549,
      "category": "Grains",
      "imageUrl": "https://images.unsplash.com/photo-1575529671710-b95d7b1f575b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "availableQuantity": 300
    },
    {
      "id": 4,
      "name": "Fresh Oranges",
      "description": "Juicy, sweet oranges perfect for juicing or enjoying as a healthy snack.",
      "price": 399,
      "category": "Fruits",
      "imageUrl": "https://images.unsplash.com/photo-1568051243854-196c7fd91e62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "availableQuantity": 200
    },
    {
      "id": 5,
      "name": "Soybeans",
      "description": "Nutritious soybeans, great for making tofu, soy milk, or as a protein-rich snack.",
      "price": 199,
      "category": "Legumes",
      "imageUrl": "https://images.unsplash.com/photo-1590181071104-5df8d9c7e80c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "availableQuantity": 500
    }
  ];

  

export interface ProductsFilter {
    category?: string,
    range?: string,
    search?: string
}

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState<ProductsFilter['search']>();
    const [data, setData] = useState<Array<ProductData>>(PRODUCT_DATA);

    const [category, setCategory] = useState<ProductsFilter['category']>('all');
    const [minVal, setMinVal] = useState<number>();
    const [maxVal, setMaxVal] = useState<number>();

    let filteredData = data;

    useEffect(()=>{
      if (data){
        setMinVal(filteredData.reduce((minPrice, currentProduct)=> (currentProduct.price < minPrice ? currentProduct.price : minPrice), data[0].price));
        setMaxVal(filteredData.reduce((maxPrice, currentProduct)=> (currentProduct.price > maxPrice ? currentProduct.price : maxPrice), data[0].price));
      }
    }, [data]);
    
    if (search){
      filteredData = filteredData.filter(product=>{
        const searchLowered = search.toLowerCase();
        return product.name.toLowerCase().includes(searchLowered) || product.category.toLowerCase().includes(searchLowered);
      });
    };

    useEffect(()=>{
        const analyzeParams = (searchParams: any) => {
            if (searchParams.get('category')){
                setCategory(searchParams.get('category'));
            }else{
                setCategory('all');
            }
        };
        analyzeParams(searchParams);
    },[searchParams]);

    const handleFilterClick = (event: any) => {
      setCategory(event.currentTarget.id);
    };

    if (category && category!='all'){
      if (category=='others'){
        filteredData = filteredData.filter(product=>{
          return product.category.toLowerCase() != 'fruits' && product.category.toLowerCase() != 'vegetables' && product.category.toLowerCase() != 'crops';
        });
      }else{
        filteredData = filteredData.filter(product=>{
          return product.category.toLowerCase().includes(category);
        });
      }
    };

    if (minVal && maxVal){
      filteredData = filteredData.filter(product=>{
        return minVal <= product.price && product.price <= maxVal;
      });
    };

    return (
        <div className='w-full p-16 text-gray-700'>
          <p className='mb-5'>Find the best products!</p>
          <div className='flex flex-col gap-8 items-start sm:flex-row'>
            <div className=''>
              <p className='font-semibold text-lg mb-2'>Categories</p>
              <ul className='flex flex-col items-start gap-5 text-gray-600'>
                  <Link id={`all`} onClick={handleFilterClick} to={'/products'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category==='all' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>All</li></Link>
                  <Link id={`fruits`} onClick={handleFilterClick} to={'/products?category=fruits'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category==='fruits' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Fruits</li></Link>
                  <Link id={`vegetables`} onClick={handleFilterClick} to={'/products?category=vegetables'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category==='vegetables' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Vegetables</li></Link>
                  <Link id={`crops`} onClick={handleFilterClick} to={'/products?category=crops'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category==='crops' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Crops</li></Link>
                  <Link id={`others`} onClick={handleFilterClick} to={'/products?category=others'}><li className={`w-48 pl-3 py-1.5 pr-16 last-of-type:mb-4 border border-gray-300 rounded transition-all cursor-pointer ${category==='others' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Others</li></Link>
              </ul>
              {minVal && maxVal && <PriceRange priceGap={10} minVal={minVal} maxVal={maxVal} changeMin={setMinVal} changeMax={setMaxVal}/>}
            </div>
            <div className='flex flex-col gap-4'>
              <ProductsFilters onChange={(filters)=>{setSearch(filters.search);}}/>
              <div className='w-full grid grid-cols-4 gap-4 gap-y-6 '>
                {filteredData.length>0 && filteredData.map(productData=><ProductComponent {...productData} />)}
                {filteredData.length==0 && <p>No relevent data found!</p>}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Products