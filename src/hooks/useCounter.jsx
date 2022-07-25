import { useState } from 'react'

const useCounter = (initialcount = 0, value) => {

    const [count, setCount] = useState(initialcount);
    
    const incrementCount = () => {
        setCount(prevCount => prevCount + value)
    }
    const decrementCount = () => {
        setCount(prevCount => prevCount - value)
    }
    const Reset = () => {
        setCount(initialcount)
    }
    return [count, incrementCount, decrementCount, Reset];
}

export default useCounter