import React from 'react'

const ProductInformation = () => {
    return (
        <div className="flex h-[80%] flex-col md:flex-row items-center justify-center bg-white p-6 space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 flex justify-center overflow-hidden">
            <img
              src="https://resources.cdn-kaspi.kz/img/m/p/h57/h52/80607622955038.jpg?format=gallery-medium"
              alt="Potato"
              className="w-full max-w-lg hover:scale-125 transition-all"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-2 space-y-4 p-8">
            <h2 className="text-3xl font-semibold">
              MAGNUM картофель отборный Казахстан
            </h2>

            <div className="flex items-center space-x-2">
              <div className="text-red-500 text-2xl">★★★★☆</div>
              <span className="text-sm text-blue-500">(322 отзыва)</span>
            </div>

            <div className="text-4xl font-extrabold text-gray-800">
              239 ₸/кг
            </div>

            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition">
              Открыть в приложении Kaspi.kz
            </button>

            <ul className="text-sm text-gray-600 space-y-1">
              <li>- страна производства: Казахстан</li>
              <li>- вид овощей: картофель</li>
            </ul>
          </div>
        </div>
      );
}

export default ProductInformation