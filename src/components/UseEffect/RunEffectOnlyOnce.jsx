import React ,{useEffect , useState} from 'react'

const RunEffectOnlyOnce = () => {
    const[x,setX] = useState(0);
    const[y,setY] = useState(0);

    const LogmousePosition = (e) =>{
        console.log("mouse event");
        setX(e.clientX);
        setY(e.clientY);
     }
    useEffect( () =>{
        console.log('UseEffect called');
        window.addEventListener('mousemove',LogmousePosition);
       //runs only once
        return () =>{
            console.log("component unmounting  code")
            window.removeEventListener('mousemove',LogmousePosition);
        }
    },[])
    
    ///To run useEffect for only once then pass  empty array as second argument to useeffect function[]

  return (
    <div>
         Hooks X:- {x} and Y :- {y}
    </div>
  )
}

export default RunEffectOnlyOnce