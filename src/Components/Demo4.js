import React, { createContext } from 'react'

import ComponentC from './ComponentC';


export const UserContext = createContext();
export const Demo4 = () => {
   
    return(
        <div>
            <UserContext.Provider value={'Chandana'}>
            <ComponentC />
            </UserContext.Provider>
        </div>
    )
}

