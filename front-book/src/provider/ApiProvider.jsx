
import React from "react";
import { useContext } from "react";
import { useState } from "react";


export const ApiContext = React.createContext();

export const useApiContext = () => useContext(ApiContext);


export const ApiProvider = ({ children }) => {

        const [apiContext, setApiContext] = useState();
        return (
                <ApiContext.Provider value={{ apiContext, setApiContext }}>
                        {children}
                </ApiContext.Provider>
        )
}