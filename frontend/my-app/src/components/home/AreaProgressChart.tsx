import React from 'react';

const data = [
    {
      id: 1,
      name: "Beans",
      percentValues: 70,
    },
    {
      id: 2,
      name: "Crops",
      percentValues: 40,
    },
    {
      id: 3,
      name: "Vegetables",
      percentValues: 60,
    },
    {
      id: 4,
      name: "Fruits",
      percentValues: 80,
    },
    {
      id: 5,
      name: "Others",
      percentValues: 20,
    },
];
  
const AreaProgressChart = () => {
return (
    <div className="progress-bar">
        <div className="progress-bar-info">
            <h4 className="progress-bar-title">Most Sold Products</h4>
        </div>
        <div className="progress-bar-list">
            {data?.map((progressbar) => {
            return (
                <div className="progress-bar-item" key={progressbar.id}>
                    <div className="bar-item-info">
                        <p className="bar-item-info-name">{progressbar.name}</p>
                        <p className="bar-item-info-value">
                            {progressbar.percentValues}
                        </p>
                    </div>
                    <div className="bar-item-full">
                        <div
                            className="bar-item-filled"
                            style={{
                                width: `${progressbar.percentValues}%`,
                            }}
                        ></div>
                    </div>
                </div>
            );
            })}
        </div>
    </div>
    );
};

export default AreaProgressChart;