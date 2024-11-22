import React from 'react'
import { Button } from 'reactstrap'
export const MyButton = (props) => {
  return (
    <div>
      <button>{props.label}</button>
    </div>
  )
}

export const AuthButton=(props)=>{
return(
  <Button block color="primary">{props.label}</Button>
)
}
