import React from 'react'

const Square = (props) => {
  return (
    <div className='h-40 w-40 border cursor-pointer text-8xl flex items-center justify-center'  onClick={props.onClick}>
      <p>{props.value}</p>
    </div>
  )
}

export default Square
