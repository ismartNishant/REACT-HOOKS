import React from 'react'
import useCounter from '../../hooks/useCounter'

const CountTwo = () => {
   const [count , incrementCount ,decrementCount ,Reset] = useCounter(10, 10) ;

  return (
    <div>
       <h1>count = {count}</h1>
       <button onClick={incrementCount} >Increment counter</button>
       <button onClick={decrementCount}>Decrement counter</button>
       <button onClick={Reset}>Reset counter</button>
    </div>
  )
}

export default CountTwo