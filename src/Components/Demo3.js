import React, { useState,useEffect } from 'react'

export const Demo3 = () => {
    const[count, setCount] = useState(0);
    useEffect(() => console.log(count),[count])
    return(
        <div>
            <p>clicked {count} times</p>
            <button onClick={ () => setCount(count+1)}>Change</button>
        </div>
    )
}