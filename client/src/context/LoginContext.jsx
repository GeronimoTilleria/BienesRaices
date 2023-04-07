import React, { createContext, useState } from 'react';

export const LoginContext = createContext();


export const LoginProvider = ({ children }) => {

    const [logeado, setLogeado] = useState(false);

    return (
        <LoginContext.Provider value={{
            logeado,
            setLogeado
        }}>
            {children}
        </LoginContext.Provider>
    )
}
