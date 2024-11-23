import React, { useEffect, useMemo, useState } from 'react';
import FarmerComponent from './FarmerComponent';
import { useParams } from 'react-router';
import { Link, useSearchParams } from 'react-router-dom';
import { FarmerData } from './types';
const FARMER_DATA: Array<FarmerData> = [
  {
    "id": 1,
    "name": "Beket Farhatovich",
    "location": "Almaty, Emendik",
    "farmSize": "100 acres",
    "crops": ["Corn", "Wheat", "Soybeans"],
    "contact": {
      "phone": "+1-555-123-4567",
      "email": "johndoe@example.com"
    },
    "imageUrl": "https://example.com/farmers/johndoe.jpg",
    "description": "John has been farming for over 15 years, specializing in sustainable agricultural practices."
  },
  {
    "id": 2,
    "name": "Maria Lyublyna",
    "location": "Shymkent, Arys",
    "farmSize": "75 acres",
    "crops": ["Avocados", "Oranges", "Grapes"],
    "contact": {
      "phone": "+1-555-987-6543",
      "email": "maria@example.com"
    },
    "imageUrl": "https://example.com/farmers/mariagarcia.jpg",
    "description": "Maria runs an organic farm and supplies local markets with fresh, high-quality produce."
  },
  {
    "id": 3,
    "name": "Liam Dalban",
    "location": "Astana, Esil",
    "farmSize": "200 acres",
    "crops": ["Corn", "Soybeans"],
    "contact": {
      "phone": "+1-555-234-5678",
      "email": "liamsmith@example.com"
    },
    "imageUrl": "https://example.com/farmers/liamsmith.jpg",
    "description": "Liam focuses on modern, data-driven farming techniques to maximize crop yields."
  },
  {
    "id": 4,
    "name": "Nashtay Alikhan",
    "location": "Almaty, Bostandyk",
    "farmSize": "200 acres",
    "crops": ["Corn", "Soybeans"],
    "contact": {
      "phone": "+1-555-234-5678",
      "email": "liamsmith@example.com"
    },
    "imageUrl": "https://example.com/farmers/liamsmith.jpg",
    "description": "Liam focuses on modern, data-driven farming techniques to maximize crop yields."
  },
  {
    "id": 5,
    "name": "Bolat Labakbay",
    "location": "Almaty, Ile",
    "farmSize": "200 acres",
    "crops": ["Corn", "Soybeans"],
    "contact": {
      "phone": "+1-555-234-5678",
      "email": "liamsmith@example.com"
    },
    "imageUrl": "https://example.com/farmers/liamsmith.jpg",
    "description": "Liam focuses on modern, data-driven farming techniques to maximize crop yields."
  }
]


const Farmers = () => {

  const [params, setParams] = useSearchParams();
  const region = params.get('region');
  const [data, setData] = useState<Array<FarmerData>>(FARMER_DATA);
  const [filter, setFilter] = useState<string>('filter-1');

  const getUpperCase = (input: string) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  const filteredData = useMemo(()=>{
    if (region){
      return FARMER_DATA.filter(farmer => farmer["location"].toLowerCase().includes(region));
    }
    return FARMER_DATA
  }, [region, FARMER_DATA]);
  
  useEffect(()=>{
    setData(filteredData);
  },[filteredData]);

  const handleFilterClick = (event: any) => {
    setFilter(event.currentTarget.id);
  };


  return (
    <div className='w-full p-16 text-gray-700'>
        <p className='mb-5'>Find the best farmer for your needs!</p>
        <div className='flex flex-col gap-8 items-start sm:flex-row'>
            <ul className='flex flex-col items-start gap-5 text-gray-600'>
                <Link id={`filter-1`} onClick={handleFilterClick} to={'/farmers'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${filter==='filter-1' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Overall</li></Link>
                <Link id={`filter-2`} onClick={handleFilterClick} to={'/farmers?region=almaty'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${filter==='filter-2' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Almaty</li></Link>
                <Link id={`filter-3`} onClick={handleFilterClick} to={'/farmers?region=astana'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${filter==='filter-3' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Astana</li></Link>
                <Link id={`filter-4`} onClick={handleFilterClick} to={'/farmers?region=shymkent'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${filter==='filter-4' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Shymkent</li></Link>
                <Link id={`filter-5`} onClick={handleFilterClick} to={'/farmers?region=aktobe'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${filter==='filter-5' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Aktobe</li></Link>
                <Link id={`filter-6`} onClick={handleFilterClick} to={'/farmers?region=karaganda'}><li className={`w-48 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${filter==='filter-6' ? 'bg-[#475be8] text-white' : 'bg-white'}`}>Karaganda</li></Link>
            </ul>
            <div className='w-full grid grid-cols-4 gap-4 gap-y-6 '>
              {data && data.map(farmerData=><FarmerComponent id={farmerData["id"]} name={farmerData["name"]} location={farmerData["location"]} farmSize={farmerData["farmSize"]} crops={farmerData["crops"]} contact={farmerData["contact"]} imageUrl={farmerData["imageUrl"]} description={farmerData["description"]}/>)}
            </div>
        </div>
    </div>
  )
}

export default Farmers