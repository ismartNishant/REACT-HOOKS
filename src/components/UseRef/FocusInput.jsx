import React ,{useEffect ,useRef} from 'react'
import { TextField } from '@mui/material'

const FocusInput = () => {
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, [])
    
  return (
    <div>
        <TextField inputRef={inputRef} id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  )
}

export default FocusInput