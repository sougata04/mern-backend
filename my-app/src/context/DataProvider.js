import { createContext, useState } from "react";

export const DataContext=createContext(null);



const DataProvider=({children})=>{

    const [account,stAccount]=useState('');

    return(
        <DataContext.Provider value={{
            account,stAccount,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;