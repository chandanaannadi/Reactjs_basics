import React from 'react'

import ComponentC from './ComponentC';


export const UserContext = React.createContext();
export const Demo4 = () => {
   
    return(
        <div>
            <UserContext.Provider value={'Chandana'}>
            <ComponentC />
            </UserContext.Provider>
        </div>
    )
}

