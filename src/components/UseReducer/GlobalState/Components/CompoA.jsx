import React, { useContext } from 'react'
import { CountContext } from '../App'
import { Button } from '@mui/material';

const ComponentA = () => {
    const countContext = useContext(CountContext);

    return (
        <div style={{display:'flex', padding:'1rem'}}>
            <h3 style={{padding:'0rem 2rem'}}> Compnent A :-  {countContext.countState}  </h3>
        <Button variant='contained' onClick={ () => countContext.countDispatch('increment')}>Increment</Button>
        <Button variant='outlined' color='error'  onClick={ () => countContext.countDispatch('decrement')}>Decrement</Button>
        <Button variant='outlined' color='secondary'  onClick={ () => countContext.countDispatch('reset')}>Reset</Button>
        </div>
    )
}

export default ComponentA