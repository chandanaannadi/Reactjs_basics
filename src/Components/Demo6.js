import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment': 
        return state + 1
        case 'decrement': 
        return state - 1
        case 'reset':
        return initialState
        default:
            return state
    }
}

export const Demo6 = () => {
    const[count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count : {count}</div>
        <button onClick={() => dispatch('increment')}>+</button> <br />
        <button onClick={() => dispatch('decrement')}>-</button> <br />
        <button onClick={() => dispatch('reset')}>initial</button>
        </div>
    );
}