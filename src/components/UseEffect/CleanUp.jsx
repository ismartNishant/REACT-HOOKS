import { Button } from '@mui/material';
import React ,{useState}from 'react'
import RunEffectOnlyOnce from './RunEffectOnlyOnce';

const CleanUp = () => {
    const [display, setDisplay] = useState(true);

  return (
    <div>
        <Button variant='contained' color='info' onClick={ () => setDisplay(!display)}>Toggle Display </Button>
        { 
          display && <RunEffectOnlyOnce />
        }
    </div>
  )
}

export default CleanUp