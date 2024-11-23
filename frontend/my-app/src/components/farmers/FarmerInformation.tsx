import React from 'react';
import { useContext } from 'react';
import { FarmerContext } from './FarmerContext';
import profile_photo from './profile_photo.jpg';
import { Inbox, Phone } from 'lucide-react';
import farm_photo from './farm.jpg';

const FarmerInformation = () => {
    const farmerContext = useContext(FarmerContext);

  if (!farmerContext) {
    throw new Error("FarmerInformation must be used within FarmerContextProvider");
  }

  const { farmerData } = farmerContext;

  if (!farmerData) {
    return <div>Loading...</div>;
  }

  const { id, name, location, description, farmSize, crops, contact } = farmerData;
    
  return (
    <div className='w-full pt-16 pl-16 text-gray-700 flex justify-between h-[80%]'>
            <div className='w-[47%] p-4 border-gray-300'>
                <div className='border border-gray-300 rounded-2xl background-white flex flex-col overflow-hidden justify-center items-center'>
                    <div className='relative'>
                        <img src={profile_photo} alt="" className='w-full h-full'/>
                        <span className='absolute top-2 left-2 text-gray-300'>Top Farmer</span>
                        <span className='absolute bottom-2 right-4 text-2xl text-white'>Rank</span>
                    </div>
                    <div className='w-full border border-gray-300 rounded-b-lg overflow-hidden flex items-stretch'>
                        <div className='w-[60%] border-r-2 border-gray-300'>
                            <div className="py-4 px-4 w-full flex flex-col gap-2">
                                <div className="flex items-center">
                                    <span className="h-5 w-5 bg-green-500 rounded-full mr-2"></span>
                                    <span className="text-xl text-green-500">Available</span>
                                </div>
                                <div className="font-bold text-2xl">{name}</div>
                                <p className="text-gray-700 text-xl">{location}</p>
                                <div className='flex text-sm font-bold text-gray-500 items-center'>
                                    <p className='text-base'>{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[40%] p-4 bg-white  text-lg flex flex-col justify-center'>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-600">Experience</span>
                                    <span className="text-orange-500 font-semibold">15 years</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-600">Sales</span>
                                    <span className="text-gray-400 font-semibold">154</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-600">Rank</span>
                                    <span className="text-green-500 font-semibold">4.8</span>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='w-1/2 p-4 h-[700px] overflow-auto'>
                <div className="p-6 mx-auto bg-white">
                    <h2 className="text-2xl font-semibold mb-4">Information</h2>
                    <div className="text-gray-700 space-y-2 mb-4">
                        <p><span className="font-semibold">Design</span> Damon Hayes Couture, Matthew Kennedy, Hayden Pattullo, Erika Burgsma, Breana Chabot</p>
                        <p><span className="font-semibold">Drafting + Building Science</span> Brighton Parks</p>
                        <p><span className="font-semibold">General Contracting</span> Fraser Maclver, Matthew Tyrer</p>
                        <p><span className="font-semibold">Site Carpentry</span> Bradley Feegrade, Andrew Wallace, Matthew Peters</p>
                    </div>
                
                    <div className="mb-4">
                        <span className="text-gray-500 text-sm">Location</span>
                        <div className="flex items-center mt-1">
                        <svg className="h-5 w-5 mr-2 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a7 7 0 00-7 7c0 4 7 11 7 11s7-7 7-11a7 7 0 00-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z"/></svg>
                        <span>{location}</span>
                        <a href="https://2gis.kz/almaty/geo/9430021605163016?m=76.928742%2C43.138189%2F11.8" target='_blank' className="text-red-500 ml-2">Open in Map</a>
                        </div>
                    </div>
                
                    <div>
                        <span className="text-gray-500 text-sm">Lender</span>
                        <div className="flex items-center mt-1 gap-4">
                            <div className='flex gap-2'>
                                <Inbox/>
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </div>
                            <div className='flex gap-2'>
                                <Phone/>
                                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold my-8 mb-4">Farm Information</h2>
                    <div className='w-[90%] border border-gray-300 rounded-2xl background-white flex flex-col overflow-hidden justify-center items-center'>
                        <div className='relative w-full'>
                            <img src={farm_photo} alt="" className='w-full h-full'/>
                        </div>
                        <div className='w-full border border-gray-300 rounded-b-lg overflow-hidden flex items-stretch'>
                            <div className='w-[60%] border-r-2 border-gray-300'>
                                <div className="py-4 px-4 w-full flex flex-col gap-2">
                                    <p className="text-gray-700 text-2xl">{location}</p>
                                    <div className='flex text-sm font-bold text-gray-500 items-center'>
                                        <p className='text-base'>{description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[40%] p-4 bg-white  text-lg flex flex-col justify-center'>
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-600">Size</span>
                                        <span className="text-orange-500 font-semibold">{farmSize}</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-600">Rank</span>
                                        <span className="text-green-500 font-semibold">4.8</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default FarmerInformation