import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Basic = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = `Clicked : ${counter} times`
        //runs on every render
    })

    return (
        <div>
            <Button variant='contained' color='secondary' onClick={() => setCounter(counter + 1)}>Clicked {counter} Times</Button>
        </div>
    )
}

export default Basic