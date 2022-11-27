import React from 'react'

function Card({className,children}) {
  return (
    <div className={`Card shadow-md bg-white rounded-lg ${className?className:''}`}>{children}</div>
  )
}

export default Card