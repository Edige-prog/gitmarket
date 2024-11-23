import React from 'react';

interface OrderProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  quantityOrdered: number;
  unit: string;
  category: string;
  image: string;
}

interface Order {
  orderId: number;
  farmerId: number;
  buyerId: number;
  farmerName: string;
  buyerName: string;
  orderDate: string;
  products: OrderProduct[];
}

const order: Order = {
  orderId: 1001,
  farmerId: 101,
  buyerId: 201,
  farmerName: "Farmer John",
  buyerName: "Alice Johnson",
  orderDate: "2023-10-15",
  products: [
    {
      id: 1,
      name: "Organic Tomatoes",
      description: "Freshly picked organic tomatoes from the farm.",
      price: 3.99,
      quantityOrdered: 5,
      unit: "kg",
      category: "Vegetables",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"
    },
    {
      id: 3,
      name: "Raw Honey",
      description: "Pure, unprocessed honey directly from beehives.",
      price: 12.00,
      quantityOrdered: 1,
      unit: "bottle",
      category: "Honey",
      image: "https://vamshifarms.com/cdn/shop/files/honey_187a8945-21f4-4ad4-b61a-34143ee13233_2048x.jpg?v=1717574377"
    },
  ]
};

const TABLE_HEADS = [
    "Product Name",
    "Description",
    "Price",
    "Quantity Ordered",
    "Unit",
    "Category",
    "Subtotal",
];

const OrderProducts = () => {
    return (
        <div className="mx-auto mt-8">
          <div className="mb-4">
            <h4 className="text-2xl font-semibold">Order Details</h4>
            <p className="text-gray-600">
              Order ID: {order.orderId} | Farmer: {order.farmerName} | Buyer: {order.buyerName} | Date: {order.orderDate}
            </p>
          </div>
          <div className="overflow-auto max-h-[540px]">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  {TABLE_HEADS.map((head, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 text-left bg-gray-100 border-b font-medium text-gray-700"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {order.products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      {product.name}
                    </td>
                    <td className="px-4 py-2">{product.description}</td>
                    <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                    <td className="px-4 py-2">{product.quantityOrdered}</td>
                    <td className="px-4 py-2">{product.unit}</td>
                    <td className="px-4 py-2">{product.category}</td>
                    <td className="px-4 py-2">
                      ${(product.price * product.quantityOrdered).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="px-4 py-2 font-semibold text-right" colSpan={6}>Total:</td>
                  <td className="px-4 py-2 font-semibold">
                    ${order.products.reduce((total, product) => total + product.price * product.quantityOrdered, 0).toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
    );
};

export default OrderProducts;
