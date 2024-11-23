import React from 'react'
import { Button } from 'reactstrap'

export const AuthButton = (props) => {
  return (
    <Button block color="primary">{props.label}</Button>
  )
}

export const CallToAcionBtn = (props) => {
  return (
    <a href={props.link}>
      <button className='rounded-2 px-3 py-2 text-white border-0 cursor-pointer m-2'
      style={{
        backgroundColor: props.bgColor,
      }}>
      {props.label}
    </button>
    </a>
  )
}