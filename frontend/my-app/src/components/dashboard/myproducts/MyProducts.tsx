import React from 'react';
import FarmerProduct from '../../farmers/FarmerProduct';
interface FarmerProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  unit: string;
  category: string;
  image: string;
}

const products: FarmerProduct[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Freshly picked organic tomatoes from the farm.",
    price: 3.99,
    quantity: 50,
    unit: "kg",
    category: "Vegetables",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"
  },
  {
    id: 2,
    name: "Free-Range Eggs",
    description: "Dozen of free-range eggs, naturally sourced.",
    price: 5.50,
    quantity: 30,
    unit: "dozen",
    category: "Dairy",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Eggs_Australia.jpg"
  },
  {
    id: 3,
    name: "Raw Honey",
    description: "Pure, unprocessed honey directly from beehives.",
    price: 12.00,
    quantity: 20,
    unit: "bottle",
    category: "Honey",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Honey_bottle.JPG"
  },
  {
    id: 4,
    name: "Fresh Strawberries",
    description: "Seasonal, hand-picked strawberries from local fields.",
    price: 8.99,
    quantity: 15,
    unit: "box",
    category: "Fruits",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"
  },
  {
    id: 5,
    name: "Farm Fresh Milk",
    description: "Full-fat, non-pasteurized milk directly from cows.",
    price: 2.99,
    quantity: 100,
    unit: "liter",
    category: "Dairy",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Glass_of_milk_on_table.jpg"
  },
  {
    id: 6,
    name: "Organic Potatoes",
    description: "Healthy, pesticide-free potatoes straight from the ground.",
    price: 2.50,
    quantity: 200,
    unit: "kg",
    category: "Vegetables",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg"
  }
];

const TABLE_HEADS = [
  "Name",
  "Price",
  "Stock",
  "Quantity",
  "Category",
]

const MyProducts = () => {
  return (
    <div className='content-area-table m-auto p-16 w-4/5'>
        <div className='data-table-title'>
            <h4 className='text-3xl font-semibold mb-6'>The products list</h4>
        </div>
        <div className='data-table-diagram h-[540px]'>
            <table>
                <thead>
                    <tr>
                        {TABLE_HEADS.map((th, index)=>(
                            <th key={index}>{th}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.length>0 && (
                        products.map((product)=><FarmerProduct {...product}/>)
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyProducts