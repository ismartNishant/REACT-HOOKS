import { Button ,Grid } from '@mui/material'
import React, { useReducer } from 'react';

//multiple reducers state as an object with a local state management

const initialState = {
    firstCounter: 0,
    secondCounter : 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state,firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value }
        
        default:
            return state
    }
}

const Complex = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (

        <Grid container spacing={2}>
            <Grid item xs={6} textAlign='center' border='2px solid #000' padding='2rem'>
            <h1>First Count :- {count.firstCounter}</h1>
                <Button variant='contained' onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</Button>
                <Button variant='outlined' color='error' onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</Button>
                <Button variant='outlined' color='secondary' onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
                <Button variant='contained' onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment By 5</Button>
                <Button variant='contained' color='warning' onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement By 5</Button>
            </Grid>
            <Grid item xs={6}  textAlign='center'  border='2px solid #000'  padding='2rem'>
            <h1>Second Count :- {countTwo.secondCounter}</h1>
                <Button variant='contained' onClick={() => dispatchTwo({ type: 'increment2', value: 1 })}>Increment</Button>
                <Button variant='outlined' color='error' onClick={() => dispatchTwo({ type: 'decrement2', value: 1 })}>Decrement</Button>
                <Button variant='outlined' color='secondary' onClick={() => dispatchTwo({ type: 'reset' })}>Reset</Button>
                <Button variant='contained' onClick={() => dispatchTwo({ type: 'increment2', value: 5 })}>Increment By 5</Button>
                <Button variant='contained' color='warning' onClick={() => dispatchTwo({ type: 'decrement2', value: 5 })}>Decrement By 5</Button>
            </Grid>
        </Grid>
       
    )
}

export default Complex