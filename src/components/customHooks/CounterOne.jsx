import React ,{useState} from 'react' 
import useDocumentTitle from '../../hooks/useDocumentTitle'

const CounterOne = () => {
    const [count, setCount] = useState(0)
    useDocumentTitle(count);
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>Counter Two - {count}</button>
    </div>
  )
}

export default CounterOne