import React ,{useState} from 'react' 
import useDocumentTitle from '../../hooks/useDocumentTitle'

const CounterTwo = () => {
    const [count, setCount] = useState(0)
    useDocumentTitle(count);
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>Counter one - {count}</button>
    </div>
  )
}

export default CounterTwo