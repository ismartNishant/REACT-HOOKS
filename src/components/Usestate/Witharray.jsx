import { Button } from '@mui/material';
import React, { useState } from 'react'

// this is the ideal way to update array
const Witharray = () => {
    const[items, setItems] = useState([]);

    const additem = () =>{
    setItems([ ...items , { id:items.length, value:Math.floor( Math.random() * 10 ) + 1 } ])
    }
  return (
    <div>
        <Button variant='outlined' onClick={additem}>Add-item</Button>
        <ul>
            {
                items.map( item => ( <li key={ item.id } > { item.value } </li> ))
            }
        </ul>
    </div>
  )
}

export default Witharray