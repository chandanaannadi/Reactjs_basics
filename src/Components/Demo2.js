import React, {useState} from 'react'

export const Demo2 = () => {
    const[name, setName] = useState('Chandana');
    return(
        <div>
            <p>{name}</p>
            <button onClick={ () => setName('Vandana')}>Change</button>
        </div>
    )
}
