import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { UserContext , AgeContext } from '../../App';

const CompoF = () => {
    const value = useContext(UserContext);
    const age = useContext(AgeContext);

  return (
    <div>
        <h1> hi  <Button variant='contained'> { value} </Button>
          how old are you <Button variant='outlined'> { age} </Button> ?
        </h1>
    </div>
  )
}

export default CompoF