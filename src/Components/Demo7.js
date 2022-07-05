import React from 'react'

export const Demo7 = () => {
    const [counter, setCounter] = React.useState(0);
    const [number, setNumber] = React.useState(6);
    const Factorial = React.useMemo(()=>fact(number),[number]);

    return (
        <div>
        Factorial : {Factorial} <br />
        <button onClick = {()=>setCounter(counter+1)}>Counter Increment</button> <br />
        <button onClick = {()=>setNumber(number+1)}>Number Increment</button> <br />
        counter : {counter}
        </div>
    )
}

const fact = (n) => {
    let answer = 1;
    for(var i = n; i >= 1; i--){
        answer = answer * i;
    }
    console.log('Factorial function calling');
    return answer;
}