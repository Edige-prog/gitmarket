import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface CardInfo {
    title: string,
    value: string,
    text: string
}

const AreaCard = ({colors, percentFillValue, cardInfo}: {colors: Array<string>, percentFillValue: number, cardInfo: CardInfo}) => {

    const filledValue = (percentFillValue/100) * 360; //degrees
    const remainedValue = 360 - filledValue; //rest

    const data = [
        { name: "Remained", value: remainedValue},
        { name: "Achieved Sales", value: filledValue}
    ];

    const renderTooltipContent = (value: number) => {
        return `${value / 360 * 100} %`;
    };

    return (
        <div className='area-card'>
            <div className='area-card-info'>
                <h5 className='info-title'>
                    {cardInfo.title}
                </h5>
                <div className='info-value'>
                    {cardInfo.value}
                </div>
                <p className='info-text'>{cardInfo.text}</p>
            </div>
            <div className='area-card-chart'>
                <PieChart width={100} height={100}>
                    <Pie
                        data={data}
                        cx={50}
                        cy={45}
                        startAngle={-270}
                        endAngle={150}
                        innerRadius={20}
                        fill={"#0088FE"}
                        paddingAngle={0}
                        stroke='none'
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={renderTooltipContent}/>
                </PieChart>
            </div>
        </div>
    )
}

export default AreaCard