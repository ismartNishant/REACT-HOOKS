import React ,{useState,useEffect,useRef} from  'react'

const MutableRef = () => {
    const [timer ,setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval( () => {
            setTimer(prevtimer => prevtimer  + 1)
        } ,1000)
    
      return () => {
        clearInterval(intervalRef.current)
      }
    }, [])
    
  return (
    <div>
        <h1>{timer}</h1>
        <button onClick={ () => clearInterval(intervalRef.current)}>clear Timer</button>
    </div>
  )
}

export default MutableRef