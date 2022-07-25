import React ,{useState ,useEffect}from 'react'
import MemoComp from './MemoComp'

const Memoparent = () => {
    const [myname, setMyname] = useState("lisa");

  useEffect(() => {
    setInterval(() => {
        setMyname("lisa")
    }, 1000);
  })
  
   
    return (
        
        <div>
            {  console.log("=----------------parent meno is rendering----------------------")} 
            Memoparent
            <MemoComp name={myname} />
        </div>
    )
}

export default Memoparent