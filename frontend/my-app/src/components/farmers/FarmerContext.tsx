import React, { createContext, useState, ReactNode } from "react";
import { FarmerData } from "./types";


interface FarmerContextType {
    farmerData: FarmerData | undefined;
    setFarmerData: React.Dispatch<React.SetStateAction<FarmerData | undefined>>;
}

export const FarmerContext = createContext<FarmerContextType | undefined>(undefined);



export const FarmerContextProvider = ({children}:{children:ReactNode}) => {
    const [farmerData, setFarmerData] = useState<FarmerData>();


    return (
        <FarmerContext.Provider value={{farmerData, setFarmerData}}>
            {children}
        </FarmerContext.Provider>
    )
}

