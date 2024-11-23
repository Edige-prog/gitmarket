import React from 'react';
import './AreaTable.scss';
import AreaTableAction from './AreaTableAction';
const TABLE_HEADS = [
    "Products",
    "Order ID",
    "Date",
    "Consumer name",
    "Status",
    "Amount",
    "Action"
]
const TABLE_DATA = [
    {
      id: 100,
      name: "Iphone 13 Pro",
      order_id: 11232,
      date: "Jun 29,2022",
      customer: "Afaq Karim",
      status: "delivered",
      amount: 400,
    },
    {
      id: 101,
      name: "Macbook Pro",
      order_id: 11232,
      date: "Jun 29,2022",
      customer: "Afaq Karim",
      status: "pending",
      amount: 288,
    },
    {
      id: 102,
      name: "Apple Watch",
      order_id: 11232,
      date: "Jun 29,2022",
      customer: "Afaq Karim",
      status: "canceled",
      amount: 500,
    },
    {
      id: 103,
      name: "Microsoft Book",
      order_id: 11232,
      date: "Jun 29,2022",
      customer: "Afaq Karim",
      status: "delivered",
      amount: 100,
    },
    {
      id: 104,
      name: "Apple Pen",
      order_id: 11232,
      date: "Jun 29,2022",
      customer: "Afaq Karim",
      status: "delivered",
      amount: 60,
    },
    {
      id: 105,
      name: "Airpods",
      order_id: 11232,
      date: "Jun 29,2022",
      customer: "Afaq Karim",
      status: "delivered",
      amount: 80,
    }
];


const AreaTable = () => {
  return (
    <div className='content-area-table'>
        <div className='data-table-title'>
            <h4>Last sellings</h4>
        </div>
        <div className='data-table-diagram'>
            <table>
                <thead>
                    <tr>
                        {TABLE_HEADS.map((th, index)=>(
                            <th key={index}>{th}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_DATA.length>0 && (
                        TABLE_DATA.map((dataItem)=>{
                            return (
                                <tr key={dataItem.id}>
                                    <td>{dataItem.name}</td>
                                    <td>{dataItem.order_id}</td>
                                    <td>{dataItem.date}</td>
                                    <td>{dataItem.customer}</td>
                                    <td>
                                        <div className='dt-status'>
                                            <span className={`dt-status-dot dot-${dataItem.status}`}></span>
                                            <span className='dt-status-text'>{dataItem.status}</span>
                                        </div>
                                    </td>
                                    <td>{dataItem.amount.toFixed(2)}</td>
                                    <td className='dt-cell-action'>
                                        <AreaTableAction/>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AreaTable