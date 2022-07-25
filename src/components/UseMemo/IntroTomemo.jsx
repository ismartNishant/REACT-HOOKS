import React, { useState,useMemo } from 'react'

const IntroTomemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const iseven = useMemo( () =>{
        let i =0;
        while(i < 2000000) i++
        return counterOne % 2 ===0
    }, [counterOne])
    
    return (
        <div>
            <div>
                <button onClick={incrementOne}>CounterOne - {counterOne} </button>
                <span>{iseven ? "Even" :"Odd"}</span>
            </div>

            <div>
                <button onClick={incrementTwo}>CounterTWO - {counterTwo} </button>
            </div>
        </div>

    )
}

export default IntroTomemo