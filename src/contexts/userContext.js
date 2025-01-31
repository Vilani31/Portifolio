
import React from 'react';
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {

    const [login, setLogin] = useState(false)
    // eslint-disable-next-line
    const [data, setData] = useState({})

    useEffect(() => {
        setData({name:'Gustavo', age: 22})
    },[])

    return (
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}