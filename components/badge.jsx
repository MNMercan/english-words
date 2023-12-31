import React from 'react'

const Badge = (props) => {
  return (
    <div className='bg-green-100 border-4 rounded-md shadow-black-300 shadow-md'>{props.word}</div>
  )
}

export default Badge