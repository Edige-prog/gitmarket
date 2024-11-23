import React, {useState, MouseEvent, ChangeEvent, useEffect} from 'react';


const PriceRange = ({priceGap=5, minVal, maxVal, changeMax, changeMin}: {priceGap: number, minVal: number, maxVal: number, changeMin: any, changeMax: any}) => {
    const [rangeStyle, setRangeStyle] = useState({ left: "0%", right: "0%" });
    
    const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value <= maxVal - priceGap) {
          changeMin(value);
        }
      };
    
    const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= minVal + priceGap) {
        changeMax(value);
    }
    };

    const min = 0;
    const max = 0;

    const leftPercent = ((minVal - min) / (max - min)) * 100;
    const rightPercent = ((maxVal - min) / (max - min)) * 100;

    return (
        <>
            <p className="font-semibold text-lg mb-2">Price</p>
            <div>
                <div className="flex justify-between items-center">
                <p>{`${minVal}`}</p>
                <p>{`${maxVal}`}</p>
                </div>
                <div>
                <div className="h-[5px] relative bg-[#ddd] rounded-[5px]">
                    <div
                        className="h-full absolute bg-[#17A2B8] rounded-[5px] left-[1/4] right-[1/4]"
                        style={{ left: `${leftPercent}%`, right: `${100 - rightPercent}%` }}
                    ></div>
                </div>
                <div className="relative">
                    <input
                        value={minVal}
                        type="range"
                        className={"absolute bg-none top-[-5px] h-[5px]"}
                        min="0"
                        max="550"
                        step="1"
                        onChange={handleMinInputChange}
                    />
                    <input
                        value={maxVal}
                        type="range"
                        className={`absolute w-full bg-none top-[-5px] h-[5px] pointer-events-none border-none`}
                        min="0"
                        max="550"
                        step="1"
                        onChange={handleMaxInputChange}
                    />
                </div>
                </div>
            </div>
        </>
    )
}

export default PriceRange