import React from 'react'

const MemoComp = ({name}) => {
    console.log("child compo")
  return (
    <div>
        {name}
    </div>
  )
}

export default  React.memo(MemoComp);