import { Button, Grid,  } from '@mui/material'
import React, { useReducer } from 'react';

//multiple reducers state as an single state  with a local state management
const initialState = 0;
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

const MultipleReducers = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);


    return (
        <Grid container spacing={2}>
            <Grid item xs={6} textAlign='center' border='2px solid #000' padding='2rem'>
                <h1>CounterOne :- {count}</h1>
                <Button variant='contained' onClick={() => dispatch('increment')}>Increment</Button>
                <Button variant='outlined' color='error' onClick={() => dispatch('decrement')}>Decrement</Button>
                <Button variant='outlined' color='secondary' onClick={() => dispatch('reset')}>Reset</Button>
            </Grid>
            <Grid item xs={6}  textAlign='center'  border='2px solid #000'  padding='2rem'>
                <h1>CounterTwo :- {countTwo}</h1>
                <Button variant='contained' onClick={() => dispatchTwo('increment')}>Increment</Button>
                <Button variant='outlined' color='error' onClick={() => dispatchTwo('decrement')}>Decrement</Button>
                <Button variant='outlined' color='secondary' onClick={() => dispatchTwo('reset')}>Reset</Button>
            </Grid>
        </Grid>
    )
}

export default MultipleReducers