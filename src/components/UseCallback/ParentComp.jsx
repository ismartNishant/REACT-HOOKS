
import React ,{useState, useCallback} from 'react'
import Count from './Count'
import DemoButton from './DemoButton'
import Title from './Title'

const ParentComp = () => {
    const [Age, setAge] = useState(25);
    const [Salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
		setAge(Age + 1)
	}, [Age])

	const incrementSalary = useCallback(() => {
		setSalary(Salary + 1000)
	}, [Salary])
  return (
    
    <div>
       
        <Title />
        <Count text="Age" count={Age} />
        <DemoButton handleClick={incrementAge} clr="secondary" >  Increment Age </DemoButton>
        <Count text="Salary" count ={Salary} />
        <DemoButton handleClick={incrementSalary} clr="success">  Increment salary </DemoButton>
    </div>
  )
}

export default ParentComp