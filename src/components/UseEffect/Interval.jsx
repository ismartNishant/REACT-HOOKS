import { Button } from '@mui/material';
import React ,{useEffect,useState} from 'react';


const Interval = () => {
    const [count, setCount] = useState(0);

    const ticks = () =>{
        setCount(count + 1);
        //or use below so don't need to add count in useeffect []
        //  setCount(prevCount => prevCount + 1);

    }
  useEffect(() =>{
      const interval = setInterval(ticks ,1000)

      return () =>{
          clearInterval(interval);
      }
  },[count])
  return (
    <div>
        <Button variant='contained' color='error'>Counter :- {count}</Button>
    </div>
  )
}

export default Interval