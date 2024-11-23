import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const orders: Array<Order> = [
    { id: '000000003', date: '10/11/19', shipTo: 'Veronica Costello', total: '$29.23', status: 'new' },
    { id: '000000002', date: '9/11/19', shipTo: 'Veronica Costello', total: '$39.64', status: 'in progress' },
    { id: '000000001', date: '9/11/19', shipTo: 'Veronica Costello', total: '$36.39', status: 'completed' },
];

const orderStatuses = [
    'new',
    'in progress',
    'completed'
]

type OrderStatus = "new" | "in progress" | "completed";

type Order = {
  id: string, 
  date: string,
  shipTo: string,
  total: string,
  status: OrderStatus
}

const Orders = () => {
    const [status, setStatus] = useState<string | null>();
    const [ordersData, setOrdersData] = useState<Array<Order>>(orders as Array<Order>);

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();


    useEffect(()=>{
      if (searchParams.get('status')){
        setStatus(searchParams.get('status'));
      }else{
        setStatus('');
      }
    }, [searchParams]);

    let filteredOrders = ordersData;

    if (status){
      filteredOrders = filteredOrders.filter(order=>order.status==status);
    }

    const handleStatusClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      const newStatus = target.innerText;
      if (status!=newStatus){
        return navigate(`/orders?status=${newStatus}`);
      }else{
        return navigate(`/orders`);
      }
    }

    return (
        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
          <div className='flex gap-4 mb-4'>
            {orderStatuses.map(orderStatus=>(
              <div onClick={handleStatusClick} className={`py-1 px-2 ${orderStatus==status ? "bg-blue-500 text-white" : "bg-white text-gray-500"} border w-fit rounded-2xl  text-sm hover:cursor-pointer`}>{orderStatus}</div>
            ))}
          </div>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Order #</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Ship To</th>
                <th className="border px-4 py-2">Order Total</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length>0 && filteredOrders.map((order) => (
                <tr key={order.id} className='cursor-pointer hover:bg-blue-500 hover:text-white transition-colors' onClick={()=>{
                  return navigate(`/orders/${order.id}`);
                }}>
                  <td className="border px-4 py-2 text-center">{order.id}</td>
                  <td className="border px-4 py-2 text-center">{order.date}</td>
                  <td className="border px-4 py-2 text-center">{order.shipTo}</td>
                  <td className="border px-4 py-2 text-center">{order.total}</td>
                  <td className="border px-4 py-2 text-center">{order.status}</td>
                </tr>
              ))}
              {filteredOrders.length==0 && <p>No order found with such status!</p>}
            </tbody>
          </table>
          <div className="mt-4">
            <span>{filteredOrders.length} Item(s)</span>
            <div className="float-right">
              <label className="mr-2">Show</label>
              <select className="border rounded px-2 py-1">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <span className="ml-2">per page</span>
            </div>
          </div>
        </div>
    );
}

export default Orders