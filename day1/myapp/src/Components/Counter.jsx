import './style/Counter.css';
import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

  

    return (
        <div className='counter'>
            <h1>
                Counter : {count}
            </h1>
            <button disabled={(count==0)} onClick={()=> setCount(count-1) }>Decrement</button>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    )
}
