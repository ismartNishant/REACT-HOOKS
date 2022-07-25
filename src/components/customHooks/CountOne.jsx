import React from 'react'
import useCounter from '../../hooks/useCounter'

const CountOne = () => {
   const [count , incrementCount ,decrementCount ,Reset] = useCounter(0,1) ;

  return (
    <div>
       <h1>count = {count}</h1>
       <button onClick={incrementCount} >Increment counter</button>
       <button onClick={decrementCount}>Decrement counter</button>
       <button onClick={Reset}>Reset counter</button>
    </div>
  )
}

export default CountOne