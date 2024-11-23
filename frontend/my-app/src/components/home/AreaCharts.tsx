import React from 'react';
import AreaBarChart from './AreaBarChart';
import AreaProgressChart from './AreaProgressChart';
import './AreaCharts.scss';

const AreaCharts = () => {
  return (
    <div className='content-area-charts'>
        <AreaBarChart/>
        <AreaProgressChart/>
    </div>
  )
}

export default AreaCharts