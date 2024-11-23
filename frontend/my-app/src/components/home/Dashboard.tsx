import React from 'react';
import AreaTop from './AreaTop';
import AreaCards from './AreaCards';
import AreaCharts from './AreaCharts';
import AreaTable from './AreaTable';

const Dashboard = () => {
  return (
    <div>
        <AreaTop/>
        <AreaCards/>
        <AreaCharts/>
        <AreaTable/>
    </div>
  )
}

export default Dashboard