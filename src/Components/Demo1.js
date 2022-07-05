import React, {useState} from 'react'

export const Demo1 = () => {
    const[count, setCount] = useState(0);
    return(
        <div>
            <p>clicked {count} times</p>
            <button onClick={ () => setCount(count+1)}>Change</button>
        </div>
    )
}

