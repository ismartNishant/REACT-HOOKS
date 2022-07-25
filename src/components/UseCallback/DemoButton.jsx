import React from 'react'
import { Button } from '@mui/material'
function DemoButton({ handleClick, children,clr }) {
  console.log('Rendering button - ', children)
  return (
    <Button  variant='contained' color={clr} onClick={handleClick}>
      {children}
    </Button>
  )
}

export default React.memo(DemoButton)