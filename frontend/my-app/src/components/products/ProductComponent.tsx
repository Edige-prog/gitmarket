import React, {MouseEvent} from 'react';
import profile_photo from './profile_photo.jpg';
import { Link } from 'react-router-dom';
import { Dot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductComponent = ({id, name, description, price, category, imageUrl, availableQuantity}: {id: number, name: string, description: string, price: number, category: string, imageUrl: string, availableQuantity: number}) => {

  const navigate = useNavigate();

  const handleNavigate = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation(); // Stops the event from bubbling up to the parent
    navigate('/top-products');
  };
  
  return (
    <Link to={`/products/${id}`} className='border border-gray-300 rounded-md background-white flex flex-col overflow-hidden justify-center items-center'>
      <div className='relative w-full h-full'>
        <img src={imageUrl} alt={description} className='w-full h-full'/>
        <div 
          onClick={handleNavigate} 
          className='absolute top-0 left-0 border-orange-400 border-0 border-b-[30px] border-l-[12px] border-l-transparent w-28 rotate-180'></div>
        <span onClick={handleNavigate} className='absolute top-1 left-2 text-white'>Top Product</span>
      </div>
      <div className="py-4 px-4 w-full">
        <div className="flex items-center mb-2">
          <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm text-green-500">Available</span>
        </div>
        <div className="font-bold text-xl mb-1">{name}</div>
        <p className="text-gray-700 text-base">Price : {price}</p>
        <div className='flex -translate-x-2 text-sm font-bold text-gray-500 items-center'>
          <Dot/>
          {category}
        </div>
      </div>
    </Link>
  )
}

export default ProductComponent