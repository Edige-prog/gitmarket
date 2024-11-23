import React, { useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const LIGHT_THEME = "light";
import { MoveUpRight } from 'lucide-react';

const data = [
  {
    month: 'Jan',
    profit: 4000,
    target: 2400
  },
  {
    month: 'Feb',
    profit: 3000,
    target: 1398
  },
  {
    month: 'Mar',
    profit: 2000,
    target: 9800
  },
  {
    month: 'April',
    profit: 2780,
    target: 3908
  },
  {
    month: 'May',
    profit: 1890,
    target: 4800
  },
  {
    month: 'Jun',
    profit: 2390,
    target: 3800
  },
  {
    month: 'Jul',
    profit: 3490,
    target: 4300
  },
  {
    month: 'Aug',
    profit: 3490,
    target: 4300
  },
  {
    month: 'Sep',
    profit: 3490,
    target: 4300
  },
  {
    month: 'Oct',
    profit: 3490,
    target: 4300
  },
  {
    month: 'Nov',
    profit: 3490,
    target: 4300
  },
  {
    month: 'Dec',
    profit: 3490,
    target: 4300
  },
];


const AreaBarChart = () => {

  const [theme, setTheme] = useState(LIGHT_THEME);

  const formatTooltipValue = (value: string) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value: string) => {
    return `${value}k`;
  };

  const formatLegendValue = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Total Revenue</h5>
        <div className="chart-info-data">
          <div className="info-data-value">$50.4K</div>
          <div className="info-data-text">
            <MoveUpRight/>
            <p>5% less than last month.</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="profit"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="target"
              fill="rgb(15, 151, 15)"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AreaBarChart;