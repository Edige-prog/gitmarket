import React from 'react'
const stores = [
    {
      name: 'Akula Mobile',
      reviews: 1518,
      rating: 5,
      postomatDate: '21 октября',
      deliveryDate: '21 октября',
      price1: 125,
      price2: 42,
    },
    {
      name: 'Sanul',
      reviews: 68,
      rating: 5,
      postomatDate: '18 октября',
      deliveryDate: '18 октября',
      express: 'за 3 часа, 995 ₸',
      price1: 150,
      price2: 50,
    },
    {
      name: 'BON STORE',
      reviews: 12,
      rating: 3,
      postomatDate: 'завтра',
      deliveryDate: 'завтра',
      selfPickup: 'сегодня',
      price1: 150,
      price2: 50,
    },
    {
      name: 'Электро Базар',
      reviews: 24,
      rating: 4,
      postomatDate: '17 октября',
      deliveryDate: '17 октября',
      price1: 168,
      price2: 56,
    },
    {
      name: 'ИП ЕСИРКЕЕВА',
      reviews: 14,
      rating: 5,
      postomatDate: '17 октября',
      deliveryDate: '17 октября',
      price1: 169,
      price2: 57,
    },
];

const Rating = ({ rating }: { rating: number }) => {
    const fullStars = Array(rating).fill(0);
    const emptyStars = Array(5 - rating).fill(0);
  
    return (
      <div className="flex">
        {fullStars.map((_, index) => (
          <span key={index} className="text-green-500">★</span>
        ))}
        {emptyStars.map((_, index) => (
          <span key={index} className="text-gray-300">★</span>
        ))}
      </div>
    );
};

const ProductRow = ({
    name,
    reviews,
    rating,
    postomatDate,
    deliveryDate,
    price1,
    price2,
    express,
    selfPickup,
  }: any) => (
    <div className="flex justify-between items-center py-4 px-3 border">
      <div className="flex-1">
        <a href="#" className="text-blue-500 font-bold">{name}</a>
        <div className="flex items-center">
          <Rating rating={rating} />
          <span className="text-gray-500 ml-2">({reviews} отзывов)</span>
        </div>
      </div>
      <div className="flex-1 text-sm text-gray-600">
        <p>Доставка, {deliveryDate}</p>
      </div>
      <div className="flex-1 text-center flex items-center max-w-60 gap-12">
        <p>{price1} ₸</p>
        <p>{price2} ₸</p>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Выбрать</button>
    </div>
);

const ProductSellers = () => {
  return (
    <div className='px-8'>
        <h2 className='text-3xl mb-4'>Farmers</h2>
        <div className='w-full max-w-[85%] mx-auto overflow-auto h-[450px]'>
            {stores.map((store, index) => (
                <ProductRow key={index} {...store} />
            ))}
        </div>
    </div>
  )
}

export default ProductSellers