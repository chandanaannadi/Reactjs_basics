import React, {useEffect, useRef } from 'react'

export const Demo5 = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        console.log(inputRef.current, "Demo5")
    }, [])
    return(
        <div>
            <input ref={inputRef} type='text' />
            
        </div>
    )
}