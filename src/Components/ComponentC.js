import React from 'react'
import {UserContext} from './Demo4'

const ComponentC = () => {
    return(
        <div>
            <UserContext.Consumer>
                {value => <div>{value}</div>}
            </UserContext.Consumer>
            
        </div>
    )
};

export default ComponentC;