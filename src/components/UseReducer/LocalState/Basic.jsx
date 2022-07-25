import { Button } from '@mui/material'
import React , {useReducer}from 'react';

const initialState = 0;
  
const reducer = (state, action) =>{
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return  initialState
       default :
       return state
    }
}
const BasicReducer = () => {
  const [count ,dispatch ] =  useReducer(reducer, initialState)
  
  return (
    <div>
        <h1>Count :- {count}</h1>
        <Button variant='contained' onClick={ () => dispatch('increment')}>Increment</Button>
        <Button variant='outlined' color='error'  onClick={ () => dispatch('decrement')}>Decrement</Button>
        <Button variant='outlined' color='secondary'  onClick={ () => dispatch('reset')}>Reset</Button>
    </div>
  )
}

export default BasicReducer