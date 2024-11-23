import React from 'react'
import orange_photo from './orange.jpg';

const FarmerProduct = ({id, name, description, price, quantity, unit, category, image}:{id:number, name: string, description: string, price: number, quantity: number, unit: string, category: string, image: string}) => {
  
  return (
    <tr className='px-4 py-3'>
      <td className='flex items-center p-4 gap-8'>
        <div className='w-16 h-16 rounded-2xl overflow-hidden'>
          <img src={orange_photo} alt={description} className='w-full h-full object-cover'/>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className='text-base'>{name}</p>
          <p className='text-xs text-gray-400'>{description}</p>
        </div>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{category}</td>
    </tr>
  )
}

export default FarmerProduct