import { Button } from '@mui/material';
import React, { useState } from 'react';


const WithPrevState = () => {
    //usestate with previous state

    const [steps, setSteps] = useState(0);
    function increment() {
        setSteps(prevState => prevState + 1);
    }
    return (
        <div>
            <h1>Today you've taken {steps} steps!</h1>
            <br />
            <Button  variant='contained' color='warning' onClick={increment}>
                I took another step
            </Button>
        </div>
    )



}

export default WithPrevState