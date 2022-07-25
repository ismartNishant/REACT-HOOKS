import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CondentionalyRender = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("updating title")
        document.title = `Clicked : ${counter} times`;
    }, [name])

    // the second argument of useEffect [] you can pass prop or state 
    //so useEffect will only be exceuted when the provied content of  [] will changed
    //here i have pass name state so only change in name state useEffect will exceuted

    return (
        <div>
            <input type='text' value={name} onChange={ (e) => setName(e.target.value)} />
            <Button variant='contained' color='secondary' onClick={() => setCounter(counter + 1)}>Clicked {counter} Times</Button>
        </div>
    )
}

export default CondentionalyRender