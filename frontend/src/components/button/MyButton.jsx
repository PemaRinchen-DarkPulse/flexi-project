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

export const JoinNowBtn = (props) => {
  return (
    <a href={props.link}>
      <div>
        <Button color="primary" outline className='rounded-2 px-3 py-2 cursor-pointer m-2'>
        {props.label}
        </Button>
      </div>
    </a>
  )
}

export const EnrollBtn = (props) => {
  return (
    <a href={props.link}>
      <button className='rounded-2 px-3 py-2 text-white border-0 cursor-pointer m-2 bg-dark'>
        {props.label}
      </button>
    </a>
  )
}

export const LoadMore = ({ onClick }) => {
  return (
    <button className="btn btn-primary me-2" onClick={onClick}>
      Show More
    </button>
  );
};

export const LoadLess = ({ onClick }) => {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      Show Less
    </button>
  );
};